"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageTeacher = void 0;
var readlineSync = require('readline-sync');
var teacher_1 = require("./teacher");
var ManageTeacher = /** @class */ (function () {
    function ManageTeacher() {
        this.listTeacher = [];
    }
    ManageTeacher.prototype.add = function () {
        var totalTeacher = readlineSync.question('Nhap vao so luong giao vien can them: ');
        for (var i = 1; i <= totalTeacher; i++) {
            var name_1 = readlineSync.question("Nhap vao ten giao vien ".concat(i, ": "));
            var age = parseFloat(readlineSync.question('Nhap vao tuoi: '));
            var salary = parseFloat(readlineSync.question('Nhap vao luong: '));
            var teacher = new teacher_1.Teacher(name_1, age, salary);
            this.listTeacher.push(teacher);
        }
    };
    ManageTeacher.prototype.edit = function () {
        var name = readlineSync.question('Nhap vao ten giao vien can sua: ');
        var nameEdited = readlineSync.question("Nhap vao ten giao vien: ");
        var ageEdited = parseFloat(readlineSync.question('Nhap vao tuoi: '));
        var salaryEdited = parseFloat(readlineSync.question('Nhap vao luong: '));
        var teacherEdited = new teacher_1.Teacher(nameEdited, ageEdited, salaryEdited);
        for (var i = 0; i < this.listTeacher.length; i++) {
            if (this.listTeacher[i].get_name() === name) {
                this.listTeacher[i] = teacherEdited;
            }
        }
    };
    ManageTeacher.prototype.show = function () {
        console.table(this.listTeacher);
    };
    ManageTeacher.prototype.delete = function () {
        var index = readlineSync.question("Nhap vao vi tri giao vien muon xoa: ");
        this.listTeacher.splice(index, 1);
    };
    ManageTeacher.prototype.sortBySalaryDesc = function () {
        var sortedTeacher = this.listTeacher.sort(function (teacherA, teacherB) { return teacherB.get_salary() - teacherA.get_salary(); });
        console.log('Danh sách giáo viên mức lương giảm dần: ');
        console.log(sortedTeacher);
    };
    ManageTeacher.prototype.showTeachersBetween30And40 = function () {
        var filteredTeachers = this.listTeacher.filter(function (teacher) { return teacher.get_age() >= 30 && teacher.get_age() <= 40; });
        console.log('Danh sách giáo viên từ 30-40 tuổi: ');
        console.table(filteredTeachers);
    };
    return ManageTeacher;
}());
exports.ManageTeacher = ManageTeacher;
