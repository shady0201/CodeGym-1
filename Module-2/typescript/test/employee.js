var Employee = /** @class */ (function () {
    function Employee(name, gender, dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee('NAL', 'B', '0'));
employeeList.push(new Employee('THA', 'C', '2'));
employeeList.push(new Employee('NAD', 'D', '4'));
employeeList.map(function (list) {
    console.log("Name: ".concat(list.name, ", gender: ").concat(list.gender, ", Date Of Birth: ").concat(list.dob));
});
function addEmployee(addStaff) {
    employeeList.push(addStaff);
}
function deleteEmloyee(deleteStaff) {
    employeeList = employeeList.filter(function (item, index) { return index !== deleteStaff; });
}
addEmployee(new Employee('CEC', 'E', '6'));
deleteEmloyee(0);
console.table(employeeList);
