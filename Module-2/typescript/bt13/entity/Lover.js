"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lover = void 0;
var Lover = /** @class */ (function () {
    function Lover(id, name, zodiac, address, date, hobbies) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._date = date;
        this._hobbies = hobbies;
    }
    Lover.prototype.get_id = function () {
        return this._id;
    };
    Lover.prototype.set_id = function (_id) {
        this._id = _id;
    };
    Lover.prototype.get_name = function () {
        return this._name;
    };
    Lover.prototype.set_name = function (_name) {
        this._name = _name;
    };
    Lover.prototype.get_zodiac = function () {
        return this._zodiac;
    };
    Lover.prototype.set_zodiac = function (_zodiac) {
        this._zodiac = _zodiac;
    };
    Lover.prototype.get_address = function () {
        return this._address;
    };
    Lover.prototype.set_address = function (_address) {
        this._address = _address;
    };
    Lover.prototype.get_date = function () {
        return this._date;
    };
    Lover.prototype.set_date = function (_date) {
        this._date = _date;
    };
    Lover.prototype.get_hobbies = function () {
        return this._hobbies;
    };
    Lover.prototype.set_hobbies = function (_hobbies) {
        this._hobbies = _hobbies;
    };
    return Lover;
}());
exports.Lover = Lover;
