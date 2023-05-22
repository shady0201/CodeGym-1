"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageCustomer = void 0;
var readlineSync = require('readline-sync');
var customer_1 = require("./customer");
var ManageCustomer = /** @class */ (function () {
    function ManageCustomer() {
        this.listCustomer = [];
    }
    ManageCustomer.prototype.add = function () {
        var totalCustomer = readlineSync.question('Nhap vao so luong KH can them: ');
        for (var i = 1; i <= totalCustomer; i++) {
            var name_1 = readlineSync.question("Nhap vao ten KH ".concat(i, ": "));
            var date = parseFloat(readlineSync.question('Nhap so ngay thue phong: '));
            var code = parseFloat(readlineSync.question('Nhap vao so cmnd: '));
            var customer = new customer_1.Customer(name_1, date, code);
            this.listCustomer.push(customer);
        }
    };
    ManageCustomer.prototype.addTest = function (customer) {
        this.listCustomer.push(customer);
    };
    ManageCustomer.prototype.show = function () {
        console.table(this.listCustomer);
    };
    ManageCustomer.prototype.delete = function (index) {
        this.listCustomer.splice(index, 1);
    };
    ManageCustomer.prototype.calculateTotalDays = function () {
        return this.listCustomer.reduce(function (acc, customer) { return acc + customer.calculateTotalDays(); }, 0);
    };
    ManageCustomer.prototype.calculateTotalFees = function () {
        var rate = parseFloat(readlineSync.question('Nhap vao gia tien 1 ngay: '));
        var totalDays = this.calculateTotalDays();
        var total = rate * totalDays;
        return total;
    };
    return ManageCustomer;
}());
exports.ManageCustomer = ManageCustomer;
