let readlineSync = require('readline-sync');

//CÁCH TẠO LỚP:
class Lib {
    code: number;
    name: string;
    numberPublish: string

    constructor(code: number, name: string, numberPublish: string) {
        this.code = code
        this.name = name
        this.numberPublish = numberPublish
    }

    display() {
        console.log(`Mã: ${this.code}, Tên NXB: ${this.name}, Số PH: ${this.numberPublish}`)
    }
}

//CÁCH TẠO ĐỐI TƯỢNG TỰ DO:
let obj = {
    code: 'A',
    name: 'A',
    numberPublish: 10
}

//CÁCH TẠO ĐỐI TƯỢNG TỪ LỚP:
let myCode = readlineSync.question('Nhap vao Code ');
let myName = readlineSync.question('Nhap vao ten ');
let myNumber = readlineSync.question('Nhap vao so phat hanh ');

while (isNaN(parseInt(myCode))) {
    console.log("Code can la mot so, vui long nhap lai");
    myCode = readlineSync.question('Nhap vao Code ');
}

let myDocument = new Lib(myCode, myName, myNumber);
myDocument.display();