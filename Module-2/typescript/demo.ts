//CÁCH TẠO LỚP:
class Document {
    code : string;
    name : string;
    numberPublish: string

    constructor(code : string, name : string, numberPublish: string) {
        this.code = code,
        this.name = name,
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
let document1 = new Document();

