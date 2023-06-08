import {Customer} from "./customer";
import {ManageCustomer} from "./managecustomer";
let readlineSync = require('readline-sync');

let choice = -1;
const myCustomer = new ManageCustomer();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Thêm mới' +
        '\n 0. Thoat')
    choice = readlineSync.question('Your Choice: ');
    if (choice == 1) {
        myCustomer.show();
    }
    if (choice == 2) {
        myCustomer.add();
    }
    if (choice == 0) {
        break;
    }
}
