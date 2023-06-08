class Document {
    code : string;
    name : string;
    numberPublish: number

    constructor(code : string, name : string, numberPublish: number) {
        this.code = code,
        this.name = name,
        this.numberPublish = numberPublish
    }

    display() {
        console.log(`Mã: ${this.code}, Tên NXB: ${this.name}, Số PH: ${this.numberPublish}`)
    }
}

let myDocument = new Document('123', 'Hoang Anh', 123);
console.log(myDocument);


