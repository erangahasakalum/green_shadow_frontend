$(document).ready(function() {
  // When the vehicle link is clicked, show the vehicle section and hide others
  $('#vehicle-click').on('click', function() {
    // Hide other sections
    $('.main').hide();
    $('#vehicle-sec').show(); // Show vehicle section
  });

/*  // Optionally, you can add similar event handlers for other sidebar links
  $('.sidebar-item a').on('click', function() {
    // Hide all sections
    $('.main, #vehicle-sec').hide();
    // Add logic to show other sections based on the link clicked
  });*/
});
