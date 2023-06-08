"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
var People = /** @class */ (function () {
    function People(name, age) {
        this._name = name;
        this._age = age;
    }
    People.prototype.get_name = function () {
        return this._name;
    };
    People.prototype.set_name = function (_name) {
        this._name = _name;
    };
    People.prototype.get_age = function () {
        return this._age;
    };
    People.prototype.set_age = function (_age) {
        this._age = _age;
    };
    return People;
}());
exports.People = People;
