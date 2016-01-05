/*
 * Copyright (c) Microsoft.  All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded.
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();
      $('#submit-charge').click(submitCharge);
      displayChargeDetails();
    });
  };

  // Displays the "Subject" and "From" fields based on the current mail item.
  function displayChargeDetails(){
    var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
    var rate = document.getElementById('rate').innerText;
    var organizer;
    var duration;
    
    if (item.itemType === Office.MailboxEnums.ItemType.Appointment) {
      organizer = Office.cast.item.toAppointmentRead(item).organizer;
      duration = (Office.cast.item.toAppointmentRead(item).end - Office.cast.item.toAppointmentRead(item).start)/3600000;
    }

    if (organizer) {
      jQuery('#organizer').text(organizer.displayName);
    }
    
    var charge;
    if (duration) {
      jQuery('#duration').text(duration);
      charge = duration * rate;
      jQuery('#charge').text(charge);

    }

  }
  
  function submitCharge(){
    var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
    var organizer = Office.cast.item.toAppointmentRead(item).organizer;
    var subject = Office.cast.item.toAppointmentRead(item).normalizedSubject;
    var rate = document.getElementById('rate').innerText;
    var discount = 0;
    var notes = "";
        
    // Apply optional discount for Tier C customers.
    var discountNode = document.getElementById('discount');    
    if ( discountNode != null){
      discount = discountNode.value;
    }
    var duration = (Office.cast.item.toAppointmentRead(item).end - Office.cast.item.toAppointmentRead(item).start)/3600000;
    var charge = duration * rate - discount;
    var date = Office.cast.item.toAppointmentRead(item).start;
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    date = mm+'/'+dd+'/'+yyyy;

    
    // Store notes for Tier B and C customers.
    
    var noteNode = document.getElementById('notes');
    if ( noteNode != null){
      notes = noteNode.value;
    }

    
    var customerCharges = JSON.parse(localStorage.getItem(organizer.displayName));
    if (customerCharges == null) {
      customerCharges = {'Charges': []};
    }
    
    customerCharges.Charges.push({'Charge': charge, 'Subject': subject, 'Date':date, 'Notes': notes});
    localStorage.setItem(organizer.displayName, JSON.stringify(customerCharges));
    jQuery('#content-footer').text('$' + charge + ' charge entered.');
  }

  
})();
