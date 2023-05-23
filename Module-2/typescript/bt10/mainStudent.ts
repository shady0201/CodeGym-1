import {ManageStudent} from "./manageStudent";
let readlineSync = require('readline-sync');

let choice = -1;
const myStudent = new ManageStudent();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Thêm' +
        '\n 2. Sửa' +
        '\n 3. Xóa' +
        '\n 4. Tìm theo tên' +
        '\n 5. Điểm cao nhất' +
        '\n 6. Hiển thị' +
        '\n 0. Thoat')

    choice = readlineSync.question('Your Choice: ');

    if (choice == 1) {
        myStudent.add();
    }

    if (choice == 2) {
        myStudent.edit();
    }

    if (choice == 3) {
        myStudent.delete();
    }

    if (choice == 4) {
        myStudent.searchStudent();
    }

    if (choice == 5) {
        myStudent.getHighestPoint(myStudent.listStudent);
    }

    if (choice == 6) {
        myStudent.show();
    }
    
    if (choice == 0) {
        break;
    }
}
