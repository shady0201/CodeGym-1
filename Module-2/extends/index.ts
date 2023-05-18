class CanBo {
    name : string;
    age : number;
    gender : string;
    adress: string;

    constructor ( name : string, age : number, gender : string, adress: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.adress = adress;
    }

    display() {

    }
}

class CongNhan extends CanBo {
    bac : number;

    constructor ( name : string, age : number, gender : string, adress: string, bac: number) {
        super(name, age, gender, adress);
        this.bac = bac;
    }
    
    displayCongNhan() {
        super.display();
    }
}

class KySu extends CanBo {
    nganhDaoTao: string;

    constructor ( name : string, age : number, gender : string, adress: string, nganhDaoTao: string) {
        super(name, age, gender, adress);
        this.nganhDaoTao = nganhDaoTao;
    }
}

class NhanVien extends CanBo {
    congViec: string;

    constructor ( name : string, age : number, gender : string, adress: string, congViec: string) {
        super(name, age, gender, adress);
        this.congViec = congViec;
    }
}