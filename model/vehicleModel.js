export default class vehicleModel {
    constructor(license_plate_number, vehicle_name, category, fuel_type, status, staff_member, remark) {
        this._license_plate_number = license_plate_number;
        this._vehicle_name = vehicle_name;
        this._category = category;
        this._fuel_type = fuel_type;
        this._status = status;
        this._staff_member = staff_member;
        this._remark = remark;
    }


    get license_plate_number() {
        return this._license_plate_number;
    }

    set license_plate_number(value) {
        this._license_plate_number = value;
    }

    get vehicle_name() {
        return this._vehicle_name;
    }

    set vehicle_name(value) {
        this._vehicle_name = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get fuel_type() {
        return this._fuel_type;
    }

    set fuel_type(value) {
        this._fuel_type = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get staff_member() {
        return this._staff_member;
    }

    set staff_member(value) {
        this._staff_member = value;
    }

    get remark() {
        return this._remark;
    }

    set remark(value) {
        this._remark = value;
    }
}