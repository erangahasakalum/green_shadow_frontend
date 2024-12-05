import vehicleModel from "../model/vehicleModel.js";
import {vehicleArray} from "../db/db.js";


$('#modalSubmitButton').on('click', () => {
    save_vehicle();
})

$(document).ready(function() {

    // Function to populate the staff dropdown
    function populateStaffDropdown(staffMembers) {
        const staffDropdown = $('#staff-vehicle');
        staffDropdown.empty();
        staffDropdown.append('<option value="">Select Field</option>');

        staffMembers.forEach(member => {
            staffDropdown.append(`<option value="${member.id}">${member.name}</option>`);
        });
    }

    // Function to add a new dropdown with staff data
    function addNewStaffDropdown(staffMembers) {
        const additionalStaffContainer = $('#additionalVehicleStaff');
        const newDropdown = $('<div class="input-group mt-2"></div>');
        newDropdown.append('<select class="form-control"><option value="">Select Field</option></select>');

        // Add staff members as options in the new dropdown
        staffMembers.forEach(member => {
            newDropdown.find('select').append(`<option value="${member.id}">${member.name}</option>`);
        });

        // Append to the container
        additionalStaffContainer.append(newDropdown);
    }

    // Fetch staff data from API when "Add Staff" button is clicked
    $('#add-vehicle-StaffButton').on('click', function() {
        $.ajax({
            url: 'http://localhost:5050/greenshadow/api/v1/vehicle', // Update with your API endpoint
            method: 'GET',
            success: function(response) {
                // Populate the initial dropdown with the fetched data
                populateStaffDropdown(response);

                // Also add a new dropdown with the same data
                addNewStaffDropdown(response);
            },
            error: function() {
                console.error('Error fetching staff data');
            }
        });
    });

    // Initial population of the dropdown when page loads (optional)
    // If you want to populate the dropdown immediately when the page loads
    $.ajax({
        url: 'http://localhost:5050/greenshadow/api/v1/vehicle', // Your API endpoint
        method: 'GET',
        success: function(response) {
            populateStaffDropdown(response);
        },
        error: function() {
            console.error('Error fetching staff data');
        }
    });

});


function save_vehicle(){
    let license_plate_number = $('#licensePlateNumber').val();
    let vehicle_name = $('#vehicleName').val();
    let category = $('#category').val();
    let fuel_type = $('#fuelType').val();
    let status = $('#status').val();
    let staff_member = $('#staffMember').val();
    let remark = $('#remark').val();

    let vehicleDto = new vehicleModel(
        license_plate_number,
        vehicle_name,
        category,
        fuel_type,
        status,
        staff_member,
        remark
    )

    // create json
    const vehicleDTOJson = JSON.stringify(vehicleDto);
    console.log(vehicleDTOJson);


    // Create XMLHttpRequest object
    const http = new XMLHttpRequest();

    // Define what happens when the response is received
    http.onreadystatechange = () => {
        // Ready state 4 means the request is done
        // Status 200 is a successful return
        if (http.readyState === 4 && http.status === 200) {
            console.log("Success: ", http.responseText);
        } else if (http.readyState === 4) {
            // If ready state is 4 and the status is not 200, log an error
            console.error("Error: ", http.statusText);
        }
    };

    // Open the request (Use the correct method and endpoint URL)
    http.open("POST", "http://localhost:5050/greenshadow/api/v1/vehicle", true); // Replace 'your-server-endpoint-url' with your actual server URL

    // Set the request headers
    http.setRequestHeader("Content-Type", "application/json");

    // Send the JSON data to the server
    http.send(vehicleDTOJson);

}