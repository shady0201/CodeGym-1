class Customer {
    date: number;
    code: number;
    typeRoom: string;
    name: string;
    phone: string;

    constructor(date: number, code: number, typeRoom: string, name: string, phone: string) {
        this.date = date,
            this.code = code,
            this.typeRoom = typeRoom,
            this.name = name,
            this.phone = phone
    }

    display() {
        console.log(`Số ngày thuê: ${this.date}, Mã phòng thuê: ${this.code}, Loại phòng: ${this.typeRoom}, Tên KH: ${this.name}, SDT: ${this.phone}`)
    }

    calculatePrice(): number {
        let pricePerDay = 0;
        if (this.typeRoom === 'A') {
            pricePerDay = 200;
        } else if (this.typeRoom === 'B') {
            pricePerDay = 300;
        } else if (this.typeRoom === 'C') {
            pricePerDay = 400;
        }
        return this.date * pricePerDay;
    }
}

let myCustomer = new Customer(8, 512, 'A', 'Hoang Anh', '0766115597');
myCustomer.display()

let totalPrice = myCustomer.calculatePrice();
console.log(`Tổng tiền phải trả: ${totalPrice} đồng.`);
