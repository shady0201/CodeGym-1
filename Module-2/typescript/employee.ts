class Employee {
    name: string;
    gender: string;
    dob: string;

    constructor(name: string, gender: string, dob: string) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
}

let employeeList: Employee[] = [];

employeeList.push(new Employee('NAL', 'B', '0'));
employeeList.push(new Employee('THA', 'C', '2'));
employeeList.push(new Employee('NAD', 'D', '4'));

employeeList.map(list => {
    console.log(`Name: ${list.name}, gender: ${list.gender}, Date Of Birth: ${list.dob}`);
}) 

function addEmployee(addStaff: Employee) {
    employeeList.push(addStaff);
}

function deleteEmloyee(deleteStaff: number) {
    employeeList = employeeList.filter((item, index) => index !== deleteStaff);
}

addEmployee(new Employee('CEC', 'E', '6'));

deleteEmloyee(0);
console.table(employeeList);

