"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageStudent = void 0;
var readlineSync = require('readline-sync');
var student_1 = require("./student");
var ManageStudent = /** @class */ (function () {
    function ManageStudent() {
        this.listStudent = [];
    }
    ManageStudent.prototype.add = function () {
        var totalStudent = readlineSync.question('Nhap vao so luong sinh vien can them: ');
        for (var i = 1; i <= totalStudent; i++) {
            var name_1 = readlineSync.question("Nhap vao ten sinh vien ".concat(i, ": "));
            var age = parseFloat(readlineSync.question('Nhap vao tuoi: '));
            var point = parseFloat(readlineSync.question('Nhap vao diem: '));
            var student = new student_1.Student(name_1, age, point);
            this.listStudent.push(student);
        }
    };
    ManageStudent.prototype.edit = function () {
        var name = readlineSync.question("Nhap vao ten sinh vien muon sua: ");
        var nameEdited = readlineSync.question("Nhap vao ten sinh vien: ");
        var ageEdited = parseFloat(readlineSync.question('Nhap vao tuoi: '));
        var pointEdited = parseFloat(readlineSync.question('Nhap vao diem: '));
        var studentEdited = new student_1.Student(nameEdited, ageEdited, pointEdited);
        for (var i = 0; i < this.listStudent.length; i++) {
            if (this.listStudent[i].get_name() === name) {
                this.listStudent[i] = studentEdited;
            }
        }
    };
    ManageStudent.prototype.show = function () {
        console.table(this.listStudent);
    };
    ManageStudent.prototype.delete = function () {
        var index = readlineSync.question("Nhap vao vi tri sinh vien muon xoa: ");
        this.listStudent.splice(index, 1);
    };
    ManageStudent.prototype.searchStudent = function () {
        var search = readlineSync.question("Nhap vao ten sinh vien muon tim kiem: ");
        var studentSearched = this.listStudent.filter(function (item) { return item.get_name().toLowerCase().includes(search.toLowerCase()) || item.get_name().includes(search); });
        console.log(studentSearched);
        return studentSearched;
    };
    ManageStudent.prototype.getHighestPoint = function (students) {
        var highestStudent = students.reduce(function (prev, current) {
            return (prev.get_point() > current.get_point()) ? prev : current;
        });
        if (highestStudent) {
            console.log("Sinh vi\u00EAn c\u00F3 \u0111i\u1EC3m cao nh\u1EA5t l\u00E0 ".concat(highestStudent.get_name(), " v\u1EDBi \u0111i\u1EC3m ").concat(highestStudent.get_point()));
        }
        else {
            console.log('Không có sinh viên nào');
        }
    };
    return ManageStudent;
}());
exports.ManageStudent = ManageStudent;
// let myStudent = new ManageStudent();
// myStudent.add();
// myStudent.show();
// myStudent.searchStudent();
