/*
 * Copyright (c) Microsoft.  All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();
      $('#create-message').click(createMessage);
      displayInvoice();
    });
  };
  
  function displayInvoice(){
    var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
    var organizer = Office.cast.item.toAppointmentRead(item).organizer;  
    var customerCharges = JSON.parse(localStorage.getItem(organizer.displayName));
    var total = 0;
    
    if (customerCharges == null) {
      //If this customer hasn't been entered in the data store, stub out an empty entry for future reference.
      customerCharges = {'Charges': []};      
      jQuery("#invoice").append("<tr><td>No unpaid charges for this customer.</td></tr>");
    }   
    else {
      jQuery('#customer-name').text(organizer.displayName);
      for ( var i in customerCharges.Charges){
        total = total + customerCharges.Charges[i].Charge;
        
        jQuery("#invoice").append("<tr><td>" + customerCharges.Charges[i].Date
        + "</td><td>" + customerCharges.Charges[i].Subject +  "</td><td>" + customerCharges.Charges[i].Notes + "</td><td>"
        + customerCharges.Charges[i].Charge
        + "</td></tr>");
      }
           
      jQuery('#invoice').append("<tr><td align='right' colspan='4' style='border-top: thin solid;'>$" + total + "</td>")
      
    }	  
  }
  
  function createMessage(){
        var mailbox = Office.context.mailbox;
        var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
        var organizer = Office.cast.item.toAppointmentRead(item).organizer; 
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        today = mm+'/'+dd+'/'+yyyy;
        var invoiceHtmlDocument = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=us-ascii'\><title>Invoice</title></head>"
          + "<body style='font-family:calibri'><img src='http://products.contosollc.com/Home3_files/logo.gif'/>" 
          + "<p>Contoso Ltd. <br> Invoice created on " + today + "</p>"
          + "<p>Bill to: " + organizer.displayName +  "<br>Email: " + organizer.emailAddress + "</p><table><tbody style='font-family:calibri'>" 
          + document.getElementById('invoice').innerHTML + "</tbody></table></body></html>"; 
        var escapedInvoice = htmlEscape(invoiceHtmlDocument);
        
        var soapToSendItem = '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
            '               xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"' +
            '               xmlns:xsd="http://www.w3.org/2001/XMLSchema"' +
            '               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"' +
            '               xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">' +
            '  <soap:Header>' +
            '    <RequestServerVersion Version="Exchange2013" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" soap:mustUnderstand="0" />' +
            '  </soap:Header>' +
            '  <soap:Body>' +
            '    <m:CreateItem MessageDisposition="SaveOnly">' +
            '      <m:Items>' +
            '        <t:Message>' +
            '          <t:Subject>Your invoice' +
            '          </t:Subject>' +
            '          <t:Body BodyType="HTML">' + escapedInvoice + '</t:Body>' +            
            '          <t:ToRecipients>' +
            '          <t:Mailbox>' +
            '          <t:EmailAddress>' + organizer.emailAddress + '</t:EmailAddress>' +
            '          </t:Mailbox>' +
            '          </t:ToRecipients>' +
            '        </t:Message>' +
            '      </m:Items>' +
            '    </m:CreateItem>' +
            '  </soap:Body>' +
            '</soap:Envelope>';  

        mailbox.makeEwsRequestAsync(soapToSendItem, callback);
  }
  
      // Function called when the EWS request is complete. 
      function callback(asyncResult) {
        if (asyncResult.error != null) {
          jQuery('#content-footer').text(asyncResult.error.message);            
        }
        else {
          jQuery("#content-footer").text('Invoice created.');
        }
      }
      
      function htmlEscape(str) {
          return String(str)
                  .replace(/&/g, '&amp;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;');
      }

  
})();
