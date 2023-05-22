var readlineSync = require('readline-sync');
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
    return Customer;
}());
var ManageCustomer = /** @class */ (function () {
    function ManageCustomer() {
        this.listCustomer = [];
    }
    ManageCustomer.prototype.add = function () {
        for (var i = 1; i <= 3; i++) {
            var name_1 = readlineSync.question("Nhap vao ten KH ".concat(i, ": "));
            var date = parseFloat(readlineSync.question('Nhap so ngay thue phong: '));
            var code = parseFloat(readlineSync.question('Nhap vao so cmnd: '));
            var customer = new Customer(name_1, date, code);
            this.listCustomer.push(customer);
        }
    };
    ManageCustomer.prototype.show = function () {
        console.table(this.listCustomer);
    };
    // delete(index: number) {
    //     this.listCustomer.splice(index, 1);
    // }
    ManageCustomer.prototype.delete = function (code) {
        this.listCustomer = this.listCustomer.filter(function (item) { return item.get_code() !== parseFloat(code); });
    };
    return ManageCustomer;
}());
var myCustomer = new ManageCustomer();
myCustomer.add();
myCustomer.show();
myCustomer.delete('123');
