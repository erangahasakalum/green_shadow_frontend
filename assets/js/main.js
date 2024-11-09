$("#vehicle-sec").css({
    display:"none"
})
// Handle the vehicle-click action
$('#vehicle-click').on('click', function() {
    // Empty the main content and move the #vehicle-sec into the .main div
    $('.main').empty();
    $('#vehicle-sec').appendTo('.main').show();
    $('#equipment-sec').hide();  // Hide the equipment section when vehicle is clicked
});
