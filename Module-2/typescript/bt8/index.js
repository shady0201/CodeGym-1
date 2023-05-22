var readlineSync = require('readline-sync');
var Student = /** @class */ (function () {
    function Student(name, age, point) {
        this._name = name;
        this._age = age;
        this._point = point;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "point", {
        get: function () {
            return this._point;
        },
        set: function (value) {
            this._point = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getI4 = function () {
        console.log('Name: ' + this._name + ', age: ' + this._age + ', point: ' + this._point);
    };
    Student.prototype.getHigherPoint = function (point) {
        if (this._point > point) {
            console.log('Điểm sinh viên lớn hơn ' + point);
        }
        else {
            console.log('Điểm sinh viên bé hơn ' + point);
        }
    };
    Student.getHighestPoint = function (students) {
        var highestPoint = 0;
        var highestStudentIndex = -1;
        for (var i = 0; i < students.length; i++) {
            if (students[i].point > highestPoint) {
                highestPoint = students[i].point;
                highestStudentIndex = i;
            }
        }
        if (highestStudentIndex >= 0) {
            console.log('Sinh viên có điểm cao nhất là ' + students[highestStudentIndex].name + ' với điểm ' + highestPoint);
        }
        else {
            console.log('Không có sinh viên nào');
        }
    };
    return Student;
}());
var students = [];
for (var i = 1; i <= 3; i++) {
    var name_1 = readlineSync.question('Nhap vao ten sinh vien ' + i + ': ');
    var age = parseInt(readlineSync.question('Nhap vao tuoi: '));
    var point = parseFloat(readlineSync.question('Nhap vao diem: '));
    var student = new Student(name_1, age, point);
    students.push(student);
}
Student.getHighestPoint(students);
