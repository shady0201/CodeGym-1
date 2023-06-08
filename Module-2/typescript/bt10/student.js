"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var people_1 = require("./people");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, point) {
        var _this = _super.call(this, name, age) || this;
        _this._point = point;
        return _this;
    }
    Student.prototype.get_point = function () {
        return this._point;
    };
    Student.prototype.set_point = function (_point) {
        this._point = _point;
    };
    return Student;
}(people_1.People));
exports.Student = Student;
