"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(id, customerName, date, amount) {
        this._id = id;
        this._customerName = customerName;
        this._date = date;
        this._amount = amount;
    }
    Invoice.prototype.get_id = function () {
        return this._id;
    };
    Invoice.prototype.set_id = function (_id) {
        this._id = _id;
    };
    Invoice.prototype.get_customerName = function () {
        return this._customerName;
    };
    Invoice.prototype.set_customerName = function (_customerName) {
        this._customerName = _customerName;
    };
    Invoice.prototype.get_date = function () {
        return this._date;
    };
    Invoice.prototype.set_date = function (_date) {
        this._date = _date;
    };
    Invoice.prototype.get_amount = function () {
        return this._amount;
    };
    Invoice.prototype.set_amount = function (_amount) {
        this._amount = _amount;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
