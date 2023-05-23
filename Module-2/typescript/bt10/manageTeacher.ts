let readlineSync = require('readline-sync');
import {Teacher} from "./teacher"

export class ManageTeacher { 
    listTeacher: Teacher[] = [];
    
    add() {
        let totalTeacher = readlineSync.question('Nhap vao so luong giao vien can them: ');
        for (let i = 1; i <= totalTeacher; i++) {
            let name = readlineSync.question(`Nhap vao ten giao vien ${i}: `);
            let age = parseFloat(readlineSync.question('Nhap vao tuoi: '));
            let salary = parseFloat(readlineSync.question('Nhap vao luong: '));
    
            let teacher = new Teacher(name, age, salary);
            this.listTeacher.push(teacher);
        }
    }

    edit() {
        let name = readlineSync.question('Nhap vao ten giao vien can sua: ');
        let nameEdited = readlineSync.question(`Nhap vao ten giao vien: `);
        let ageEdited = parseFloat(readlineSync.question('Nhap vao tuoi: '));
        let salaryEdited = parseFloat(readlineSync.question('Nhap vao luong: '));
        let teacherEdited = new Teacher(nameEdited, ageEdited, salaryEdited);

        for (let i = 0; i < this.listTeacher.length; i++) {
            if (this.listTeacher[i].get_name() === name) {
                this.listTeacher[i] = teacherEdited;
            }
        }
    }
    
    show(): void {
        console.table(this.listTeacher)
    }
    
    delete() {
        let index = readlineSync.question(`Nhap vao vi tri giao vien muon xoa: `);
        this.listTeacher.splice(index, 1);
    }   

    sortBySalaryDesc() {
        let sortedTeacher = this.listTeacher.sort((teacherA, teacherB) => teacherB.get_salary() - teacherA.get_salary());
        console.log('Danh sách giáo viên mức lương giảm dần: ')
        console.log(sortedTeacher);
    }

    showTeachersBetween30And40() {
        let filteredTeachers = this.listTeacher.filter((teacher) => teacher.get_age() >= 30 && teacher.get_age() <= 40);
        console.log('Danh sách giáo viên từ 30-40 tuổi: ');
        console.table(filteredTeachers);
    }
}

