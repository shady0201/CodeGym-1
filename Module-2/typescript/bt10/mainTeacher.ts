import {ManageTeacher} from "./manageTeacher";
let readlineSync = require('readline-sync');

let choice = -1;
const myStudent = new ManageTeacher();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Thêm' +
        '\n 2. Sửa' +
        '\n 3. Xóa' +
        '\n 4. Danh sách giáo viên mức lương giảm dần' +
        '\n 5. Danh sách giáo viên có tuổi từ 30-40' +
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
        myStudent.sortBySalaryDesc();
    }

    if (choice == 5) {
        myStudent.showTeachersBetween30And40();
    }

    if (choice == 6) {
        myStudent.show();
    }
    
    if (choice == 0) {
        break;
    }
}
