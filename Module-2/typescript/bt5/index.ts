class Students {
    code : number;
    name : string;
    math : number;
    physics : number;
    chemisty : number;

    constructor(code : number, name : string, math : number, physics : number, chemisty : number) {
        this.code = code,
        this.name = name,
        this.math = math,
        this.physics = physics,
        this.chemisty = chemisty
    }

    display() {
        console.table(`Mã sinh viên: ${this.code}, Tên sinh viên: ${this.name}, Điểm Toán: ${this.math}, Điểm Lý: ${this.physics}, Điểm Hóa: ${this.chemisty}`)
    }

    checkGraduation() {
        let totalScore = this.math + this.physics + this.chemisty;
        if (totalScore < 21 || this.math < 5 || this.physics < 5 || this.chemisty < 5) {
            console.log(`${this.name} không đủ điều kiện tốt nghiệp`);
        } else {
            console.log(`${this.name} đã đủ điều kiện tốt nghiệp`);
        }
    }
}

let myStudent = new Students(69, 'Hoang Anh', 10, 8, 9);

const studentList: Students[] = [
    new Students(62, 'Hoang Anh', 10, 8, 9),
    new Students(63, 'Hoang Em', 6, 7, 9),
    new Students(69, 'Hoang', 5, 8, 7),
];

studentList.forEach((student) => student.checkGraduation());

console.table(studentList);
