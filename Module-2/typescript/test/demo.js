var readlineSync = require('readline-sync');
//CÁCH TẠO LỚP:
var Lib = /** @class */ (function () {
    function Lib(code, name, numberPublish) {
        this.code = code,
            this.name = name,
            this.numberPublish = numberPublish;
    }
    Lib.prototype.display = function () {
        console.log("M\u00E3: ".concat(this.code, ", T\u00EAn NXB: ").concat(this.name, ", S\u1ED1 PH: ").concat(this.numberPublish));
    };
    return Lib;
}());
//CÁCH TẠO ĐỐI TƯỢNG TỰ DO:
var obj = {
    code: 'A',
    name: 'A',
    numberPublish: 10
};
//CÁCH TẠO ĐỐI TƯỢNG TỪ LỚP:
var myCode = readlineSync.question('Nhap vao Code');
var myName = readlineSync.question('Nhap vao ten');
var myNumber = readlineSync.question('Nhap vao so phat hanh');
var myDocument = new Lib(myCode, myName, myNumber);
myDocument.display();
