let readlineSync = require('readline-sync');
import {Student} from "./student"

export class ManageStudent { 
    listStudent: Student[] = [];
    
    add() {
        let totalStudent = readlineSync.question('Nhap vao so luong sinh vien can them: ');
        for (let i = 1; i <= totalStudent; i++) {
            let name = readlineSync.question(`Nhap vao ten sinh vien ${i}: `);
            let age = parseFloat(readlineSync.question('Nhap vao tuoi: '));
            let point = parseFloat(readlineSync.question('Nhap vao diem: '));
    
            let student = new Student(name, age, point);
            this.listStudent.push(student);
        }
    }

    edit() {
        let name = readlineSync.question(`Nhap vao ten sinh vien muon sua: `);
        let nameEdited = readlineSync.question(`Nhap vao ten sinh vien: `);
        let ageEdited = parseFloat(readlineSync.question('Nhap vao tuoi: '));
        let pointEdited = parseFloat(readlineSync.question('Nhap vao diem: '));

        let studentEdited = new Student(nameEdited, ageEdited, pointEdited);
        for (let i = 0; i < this.listStudent.length; i++) {
            if (this.listStudent[i].get_name() === name) {
                this.listStudent[i] = studentEdited;
            }
        }
    }
    
    show(): void {
        console.table(this.listStudent)
    }
    
    delete(): void {
        let index = readlineSync.question(`Nhap vao vi tri sinh vien muon xoa: `);
        this.listStudent.splice(index, 1);
    }   

    searchStudent(): Student[] {
        let search = readlineSync.question(`Nhap vao ten sinh vien muon tim kiem: `);
        let studentSearched = this.listStudent.filter(item => item.get_name().toLowerCase().includes(search.toLowerCase())|| item.get_name().includes(search));
        console.log(studentSearched);
        return studentSearched;
    }

    getHighestPoint(students: Student[]) {
        let highestStudent = students.reduce((prev, current) => {
            return (prev.get_point() > current.get_point()) ? prev : current;
        });
        if (highestStudent) {
            console.log(`Sinh viên có điểm cao nhất là ${highestStudent.get_name()} với điểm ${highestStudent.get_point()}`);
        } else {
            console.log('Không có sinh viên nào');
        }
    }
}

// let myStudent = new ManageStudent();
// myStudent.add();
// myStudent.show();

// myStudent.searchStudent();