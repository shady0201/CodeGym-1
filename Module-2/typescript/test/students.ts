class Students {
    name: string;
    age: number;
    point: number;

    constructor(name: string, age: number, point: number) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
}

function displayOne(list: Students) {
    console.log(`Name: ${list.name}, gender: ${list.age}, Date Of Birth: ${list.point}`);
}

function displayList() {
    studentList.map(list => {
        displayOne(list);
    })
}

const studentList: Students[] = [
    new Students('Truong Hoang Anh', 25, 10),
    new Students('Nguyen Thi Quynh', 30, 1),
    new Students('Như Anh Dao', 28, 6),
];

function addStudent(addStudent: Students) {
    studentList.push(addStudent);
    displayList();
}

function deleteStudent(index: number) {
    studentList.splice(index, 1);
    displayList();
}

function searchStudent(search: string): Students[] {
    return studentList.filter(student => student.name.toLowerCase().includes(search.toLowerCase())|| student.name.includes(search) );
}

console.log(searchStudent("T"));
console.table(studentList);

