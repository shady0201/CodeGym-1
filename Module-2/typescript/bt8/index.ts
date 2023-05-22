let readlineSync = require('readline-sync');

class Student {
    private _name: string;
    private _age: number;
    private _point: number;

    constructor(name: string, age: number, point: number) {
        this._name = name;
        this._age = age;
        this._point = point;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get point(): number {
        return this._point;
    }

    set point(value: number) {
        this._point = value;
    }

    // static getHeader() {
    //     return ['Name', 'Age', 'Point'];
    // }

    // toRow() {
    //     return [this._name, this._age, this._point];
    // }

    getI4() {
        console.log('Name: '+ this._name +', age: '+this._age +', point: '+this._point);
    }

    getHigherPoint(point: number) {
        if (this._point > point) {
            console.log('Điểm sinh viên lớn hơn ' + point);
        } else {
            console.log('Điểm sinh viên bé hơn ' + point);  
        }
    }
    
    static getHighestPoint(students: Student[]) {
        let highestPoint = 0;
        let highestStudentIndex = -1;
        for (let i = 0; i < students.length; i++) {
            if (students[i].point > highestPoint) {
                highestPoint = students[i].point;
                highestStudentIndex = i;
            }
        }
        if (highestStudentIndex >= 0) {
            console.log('Sinh viên có điểm cao nhất là ' + students[highestStudentIndex].name + ' với điểm ' + highestPoint);
        } else {
            console.log('Không có sinh viên nào');
        }
    }
}

let students: Student[] = [];

for (let i = 1; i <= 3; i++) {
    let name = readlineSync.question('Nhap vao ten sinh vien ' + i + ': ');
    let age = parseInt(readlineSync.question('Nhap vao tuoi: '));
    let point = parseFloat(readlineSync.question('Nhap vao diem: '));
    let student = new Student(name, age, point);
    students.push(student);
}

console.log('Danh sách sinh viên:');
console.table(students);

Student.getHighestPoint(students);

