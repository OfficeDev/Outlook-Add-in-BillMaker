
Office.initialize = function () {
}


//Clears all charges for the customer.
function clearValues(event) {
  var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
  var organizer = Office.cast.item.toAppointmentRead(item).organizer;
  localStorage.removeItem(organizer.displayName);
  item.notificationMessages.replaceAsync("status", {
    type: "informationalMessage",
    icon: "icon1_16x16",
    message: "Finished clearing charges for customer.",
    persistent: false
  });
  event.completed();
}
