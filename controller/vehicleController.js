import vehicleModel from "../model/vehicleModel";
import {vehicleArray} from "../db/db";

$('#modalSubmitButton').on('click', () => {
    save_vehicle();
})

function save_vehicle(){
    let license_plate_number = $('#licensePlateNumber').val();
    let vehicle_name = $('#vehicleName').val();
    let category = $('#category').val();
    let fual_type = $('#fuelType').val();
    let status = $('#status').val();
    let staff_member = $('#staffMember').val();
    let remark = $('#remark').val();

    console.log(license_plate_number,vehicle_name)

}