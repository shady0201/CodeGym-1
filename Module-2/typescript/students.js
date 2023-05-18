var Students = /** @class */ (function () {
    function Students(name, age, point) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
    return Students;
}());
function displayOne(list) {
    console.log("Name: ".concat(list.name, ", gender: ").concat(list.age, ", Date Of Birth: ").concat(list.point));
}
function displayList() {
    studentList.map(function (list) {
        displayOne(list);
    });
}
var studentList = [
    new Students('Truong Hoang Anh', 25, 10),
    new Students('Nguyen Thi Quynh', 30, 1),
    new Students('Như Anh Dao', 28, 6),
];
function addStudent(addStudent) {
    studentList.push(addStudent);
    displayList();
}
function deleteStudent(index) {
    studentList.splice(index, 1);
    displayList();
}
function searchStudent(search) {
    return studentList.filter(function (student) { return student.name.toLowerCase().includes(search.toLowerCase()); });
}
console.log(searchStudent("T"));
console.table(studentList);
