$("#vehicle-sec").css({
    display:"none"
})

$("#staff-sec").css({
    display:"none"
})
// Handle the vehicle-click action
$('#vehicle-click').on('click', function() {
    // Empty the main content and move the #vehicle-sec into the .main div
  /*  $('.main').empty();*/
    $('#vehicle-sec').appendTo('.main').show();
    $('#staff-sec').hide();  // Hide the equipment section when vehicle is clicked
    $('#equipment-sec').hide();
});

// Handle the staff-click action
$('#staff-click').on('click', function() {
    // Empty the main content and move the #vehicle-sec into the .main div
   /* $('.main').empty();*/
    $('#staff-sec').appendTo('.main').show();
    $('#vehicle-sec').hide();  // Hide the equipment section when vehicle is clicked
    $('#equipment-sec').hide();
});

// Handle the crop-click action
$('#equipment-click').on('click', function() {
    // Empty the main content and move the #vehicle-sec into the .main div
    /* $('.main').empty();*/
    $('#equipment-sec').appendTo('.main').show();
    $('#vehicle-sec').hide();  // Hide the equipment section when vehicle is clicked
    $('#staff-sec').hide();
});