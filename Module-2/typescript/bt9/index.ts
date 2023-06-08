    let readlineSync = require('readline-sync');

    class Customer {
        private _date: number;
        private _code: number;
        private _name: string;
    
        constructor(
            name: string,
            date: number,
            code: number,
        ) {
            this._name = name
            this._date = date
            this._code = code
        }

        public get_date(): number {
            return this._date;
        }

        public set_date(_date: number): void {
            this._date = _date;
        }

        public get_code(): number {
            return this._code;
        }

        public set_code(_code: number): void {
            this._code = _code;
        }

        public get_name(): string {
            return this._name;
        }

        public set_name(_name: string): void {
            this._name = _name;
        }

        display() {
            console.log(`Tên KH: ${this._name}, Số ngày thuê: ${this._date}, CMND: ${this._code}`)
        }

        calculateRoomFee(rate: number): number {
            let fee = rate * this._date;
            return fee;
        }

        calculateTotalDays(): number {
            return this._date;
        }
    }

    class ManageCustomer { 
        private listCustomer: Customer[] = [];
        
        add() {
            let totalCustomer = readlineSync.question('Nhap vao so luong KH can them: ');
            for (let i = 1; i <= totalCustomer; i++) {
                let name = readlineSync.question(`Nhap vao ten KH ${i}: `);
                let date = parseFloat(readlineSync.question('Nhap so ngay thue phong: '));
                let code = parseFloat(readlineSync.question('Nhap vao so cmnd: '));
        
                let customer = new Customer(name, date, code);
                this.listCustomer.push(customer);
            }
        }

        addTest(customer: Customer) {
            this.listCustomer.push(customer)
        }
        
        show(): void {
            console.table(this.listCustomer)
        }
        
        delete(index: number) {
            this.listCustomer.splice(index, 1);
        }
    
        calculateTotalDays(): number {
            return this.listCustomer.reduce((acc, customer) => acc + customer.calculateTotalDays(), 0);
        }
    
        calculateTotalFees(): number {
            let rate = parseFloat(readlineSync.question('Nhap vao gia tien 1 ngay: '));
    
            let totalDays = this.calculateTotalDays();
    
            let total = rate * totalDays;
            return total;
        }
    
    }

const myCustomer = new ManageCustomer();

// myCustomer.addTest(new Customer('ABC',123,123))
myCustomer.add();
// myCustomer.delete(1);
myCustomer.show();

let totalFees = myCustomer.calculateTotalFees();
let totalDays = myCustomer.calculateTotalDays();
console.log(`Tổng tiền phòng: ${totalFees} với tổng số ngày thuê là: ${totalDays}`);