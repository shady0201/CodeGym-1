class CuDan {
    name : string;
    age : number;
    career: string;
    id : number

    constructor(name : string,  age : number, career: string, id : number) {
        this.name = name,
        this.age = age,
        this.career = career,
        this.id = id
    }

    display() {
        console.table(`Tên: ${this.name}, Tuổi: ${this.age}, Nghề nghiệp: ${this.career}, CMND: ${this.id}`)
    }
}

let myCuDan = new CuDan('Hoang Anh', 25, 'Freelancer', 696969696);
myCuDan.display();
