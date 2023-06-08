"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name, date, code) {
        this._name = name;
        this._date = date;
        this._code = code;
    }
    Customer.prototype.get_date = function () {
        return this._date;
    };
    Customer.prototype.set_date = function (_date) {
        this._date = _date;
    };
    Customer.prototype.get_code = function () {
        return this._code;
    };
    Customer.prototype.set_code = function (_code) {
        this._code = _code;
    };
    Customer.prototype.get_name = function () {
        return this._name;
    };
    Customer.prototype.set_name = function (_name) {
        this._name = _name;
    };
    Customer.prototype.display = function () {
        console.log("T\u00EAn KH: ".concat(this._name, ", S\u1ED1 ng\u00E0y thu\u00EA: ").concat(this._date, ", CMND: ").concat(this._code));
    };
    Customer.prototype.calculateRoomFee = function (rate) {
        var fee = rate * this._date;
        return fee;
    };
    Customer.prototype.calculateTotalDays = function () {
        return this._date;
    };
    return Customer;
}());
exports.Customer = Customer;
