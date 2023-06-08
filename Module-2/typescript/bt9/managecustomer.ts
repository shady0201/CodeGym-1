let readlineSync = require('readline-sync');
import {Customer} from "./customer"

export class ManageCustomer { 
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