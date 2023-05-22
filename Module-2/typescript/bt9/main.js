"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var managecustomer_1 = require("./managecustomer");
var readlineSync = require('readline-sync');
var choice = -1;
var myCustomer = new managecustomer_1.ManageCustomer();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Thêm mới' +
        '\n 0. Thoat');
    choice = readlineSync.question('Chọn đê: ');
    if (choice == 1) {
        myCustomer.add();
    }
    // if (choice == 2) {
    //     console.log('Nhap vao thong tin hoa don moi nhe: ');
    //     let cmnd = nhap.question('Nhap vao cmnd');
    //     let ten = nhap.question('Nhap vao ten');
    //     let tuoi = nhap.question('Nhap vao tuoi');
    //     let soNgayThue = nhap.question('Nhap vao soNgayThue');
    //     let loaiPhong = nhap.question('Nhap vao Loai phong');
    //     ql.them(new HoaDon(cmnd, ten, tuoi, soNgayThue, loaiPhong));
    // }
    if (choice == 0) {
        break;
    }
}
