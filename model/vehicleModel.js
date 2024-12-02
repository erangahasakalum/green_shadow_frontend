export default class vehicleModel{
    constructor(licensePlateNumber,name,category,fuelType,status,remark,memberCode) {
        this._customer_id = customer_id;
        this._customer_name = customer_name;
        this._city = city;
        this._telephone = telephone;
        this._licensePlateNumber = licensePlateNumber;
        this._name = name;
        this._category = category;
        this._fuelType = fuelType;
        this._status = status;
        this._remark = remark;
        this._memberCode = memberCode;

    }


    get licensePlateNumber() {
        return this._licensePlateNumber;
    }

    set licensePlateNumber(value) {
        this._licensePlateNumber = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get fuelType() {
        return this._fuelType;
    }

    set fuelType(value) {
        this._fuelType = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get remark() {
        return this._remark;
    }

    set remark(value) {
        this._remark = value;
    }

    get memberCode() {
        return this._memberCode;
    }

    set memberCode(value) {
        this._memberCode = value;
    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get customer_name() {
        return this._customer_name;
    }

    set customer_name(value) {
        this._customer_name = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get telephone() {
        return this._telephone;
    }

    set telephone(value) {
        this._telephone = value;
    }
}
