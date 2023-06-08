class Province {
    code : string;
    name : string;
    people: number;
    gpd: number;

    constructor (code : string, name : string, people: number, gpd: number) {
        this.code = code;
        this.name = name;
        this.people = people;
        this.gpd = gpd;
    }
}

class People {
    code : string;
    name : string;
    phone: string;
    province : Province;

    constructor (code : string, name : string, phone: string, province : Province) {
        this.code = code;
        this.name = name;
        this.phone = phone;
        this.province = province;
    }
}

let myProvince = new Province('123', 'HA NOI', 123, 123)
let myPeople = new People('123', 'HA', '595', myProvince)

console.log(myPeople.code + '|' + myPeople.name + '|' + myPeople.phone + '|' + myPeople.province.name);
