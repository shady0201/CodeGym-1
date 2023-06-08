class Student {
    code : string;
    address : string;
    number: number

    constructor(code : string, address : string, number: number) {
        this.code = code,
        this.address = address,
        this.number = number
    }

    display() {
        console.table(`Số báo danh: ${this.code}, Địa chỉ: ${this.address}, Mức ưu tiên: ${this.number}`)
    }
}

let myStudent = new Student('69', 'Hoang Anh', 1);
myStudent.display();
