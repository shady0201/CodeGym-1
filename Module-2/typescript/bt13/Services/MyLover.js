"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLover = void 0;
var Lover_1 = require("../entity/Lover");
var MyLover = /** @class */ (function () {
    function MyLover() {
        this.listLover = [];
    }
    MyLover.prototype.showLover = function () {
        console.table(this.listLover);
    };
    MyLover.prototype.searchLoverByName = function (search) {
        throw new Error("Method not implemented.");
    };
    MyLover.prototype.addLover = function (lover) {
        this.listLover.push(lover);
    };
    MyLover.prototype.editLover = function (id, updateLover) {
        throw new Error("Method not implemented.");
    };
    MyLover.prototype.deleteLover = function (id) {
        throw new Error("Method not implemented.");
    };
    return MyLover;
}());
exports.MyLover = MyLover;
var myLover = new MyLover();
myLover.addLover(new Lover_1.Lover(123, 'Quynh', 'Gemini', 'Nam Định', 1993, 'WorkSing'));
myLover.addLover(new Lover_1.Lover(456, 'Hoang Anh', 'Libra', 'Hà Nội', 1997, 'Travel, Sing'));
myLover.showLover();
