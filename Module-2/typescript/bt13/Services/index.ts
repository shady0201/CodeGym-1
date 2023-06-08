import {MyLover} from "./MyLover";
let readlineSync = require('readline-sync');

let choice = -1;
const myLover = new MyLover();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị danh sách người yêu' +
        '\n 2. Tìm kiếm người yêu theo tên người yêu' +
        '\n 3. Thêm mới một người yêu' +
        '\n 4. Chỉnh sửa thông tin một người yêu' +
        '\n 5. Xóa người yêu' +
        '\n 0. Thoát')

    choice = readlineSync.question('Your Choice: ');

    if (choice == 1) {
        myLover.showLover()
    }

    if (choice == 2) {
        let search = readlineSync.question('Nhập vào tên từ khóa cần tìm kiếm: ');
        myLover.searchLoverByName(search);

    }

    if (choice == 3) {
        myLover.addLover();
    }

    if (choice == 4) {
        myLover.editLover()
    
    }

    if (choice == 5) {
        let id = readlineSync.question('Nhập vào ID cần xóa: ')
        myLover.deleteLover(id);
    }

    if (choice == 6) {
        myLover.showLover()
    }
    
    if (choice == 0) {
        break;
    }
}
