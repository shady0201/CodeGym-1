import { AccountManagement } from "../entity/AccountManagement";
import { ComputerManager } from "../entity/ComputerManager/ComputerManager";
import { MenuServices } from "../entity/MenuManager/MenuServices";
import { UserManager } from "../entity/UserManager/UserManager";

let readlineSync = require('readline-sync');

function yesNo(): string {
    let response = readlineSync.question('Go y/n: ');
    while (response !== 'y' && response !== 'n') {
      console.log('Bạn phải nhập kí tự "y" hoặc "n".');
      response = readlineSync.question('Go y/n: ');
    }
    return response;
}

new AccountManagement();
new ComputerManager();
new MenuServices();
new UserManager();

let choice = -1;
while (choice !== 0) {
    console.log('Select:' +
        '\n 1. Login' +
        '\n 2. Register' +
        '\n 3. Show List Admin' +
        '\n 4. Exit')
    choice = parseInt(readlineSync.question('Lua chon cua ban: '), 10);

    switch (choice) {
        case 1: 
            console.log('Nhập vào thông tin đăng nhập');
            let userName = readlineSync.question('Ten dang nhap: ');
            let userNameUppered = userName.toUpperCase();
            let passWord = readlineSync.question('Mat khau: ')
            AccountManagement.login(userNameUppered, passWord);
        break;
        
        case 2: 
        let id = +readlineSync.question('Nhap vao ID: ');
        if(AccountManagement.accountExists(id)) {
            console.log(`ID "${id}" đã tồn tại, vui lòng chọn ID khác!`);
            } else {
                let user = readlineSync.question('Nhap vao Username: ');
                let pass = readlineSync.question('Nhap vao Password: ');
                AccountManagement.register(id, user, pass);
            }
        break;  

        case 3:
            console.log('Danh sách User Admin');   
            AccountManagement.showUserCashRegister();
            break;

        case 4:
            console.log('Bạn đã chọn lựa chọn thoát. Hẹn gặp lại!');
            process.exit();
    }

    if (choice === 1) {
        let choiceMenu = -1; 
        while (choiceMenu !== 0) {            
            console.log('Nhập vào lựa chọn:' +
                '\n 1. Hiển thị danh sách máy có trong quán' +
                '\n 2. Thêm một máy mới vào danh sách' +
                '\n 3. Sửa đổi thông tin của máy' +
                '\n 4. Xóa một máy ra khỏi danh sách' +
                '\n 5. Thêm dịch vụ' +
                '\n 6. Chỉnh sửa tính tiền theo giờ' +
                '\n 7. Tính tiền' +
                '\n 8. Quản lý tài khoản đăng nhập' +
                '\n 9. Doanh thu' +
                '\n 10. Đăng xuất' +
                '\n 0. Thoát');
                    
            choiceMenu = parseInt(readlineSync.question('Lua chon cua ban: '), 10); 
                
            switch (choiceMenu) {
                
                case 1:
                    let choiceListComputer = -1; 

                    while (choiceListComputer != 0) {
                        console.log('Nhập vào lựa chọn:' +
                            '\n 1. Hiển thị toàn bộ máy' +
                            '\n 2. Hiển thị toàn bộ máy Online' +
                            '\n 3. Hiển thị toàn bộ máy Online' +
                            '\n 4. Trở lại menu trước')
            
                        choiceListComputer = readlineSync.question('Lua chon cua ban: ');

                        if (choiceListComputer == 1) {
                            ComputerManager.showListComputer();
                            ComputerManager.sortComputersById();
                            let index = readlineSync.question('Lua chon hien thi so may: ');
                            let selectedComputer = ComputerManager.selectComputer(index);
                            console.log(`Thông tin máy: ${selectedComputer.getName()} - ${selectedComputer.getUsedBy()}`);
                        }

                        if (choiceListComputer == 2) {
                            ComputerManager.showOnlineComputers();
                        }
                        
                        if (choiceListComputer == 3) {
                            ComputerManager.showOfflineComputers();
                        }

                        if (choiceListComputer == 4) {
                            break;
                        }                       
                    }
                    break;

                case 2:
                    let numberOfComputerWantToAdd = +readlineSync.question('So luong Computer muon add: ');
                    let name = readlineSync.question('Ten Computer: ');
                    ComputerManager.addComputer(numberOfComputerWantToAdd, name);
                    ComputerManager.showListComputer();
                    break;

                case 3:
                    let id = +readlineSync.question('Chon ID Computer ban muon sua: ');
                    let newName = readlineSync.question('Nhap ten Computer: ')
                    ComputerManager.editComputer(id, newName);
                    ComputerManager.showListComputer();
                    break;

                case 4:
                    ComputerManager.removeComputer();
                    ComputerManager.showListComputer();
                    break;

                case 5:
                    MenuServices.addMenuServices();     
                    MenuServices.showMenuServices(); 
                    break;

                case 6:
                    // choice 6
                    break;

                case 7:
                    // choice 7
                    break;

                case 8:
                    let choiceUser = -1;

                    while (choiceUser != 0) {
                        console.log('Nhập vào lựa chọn:' +
                        '\n 1. Thêm tài khoản mới' +
                        '\n 2. Mật khẩu tài khoản' +
                        '\n 3. Xóa tài khoản' +
                        '\n 4. Danh sách các tài khoản' +
                        '\n 5. Kiểm tra tiền trong tài khoản' +
                        '\n 6. Nạp tiền cho tài khoản' +
                        '\n 7. Thay đổi tiền cho tài khoản' +
                        '\n 8. Login' +
                        '\n 9. Logout' +
                        '\n 10. Kiểm tra thời gian sử dụng của User' +
                        '\n 11. Tính tiền' +
                        '\n 12. Trở lại Menu trước')
                        
                        choiceUser = parseInt(readlineSync.question('Lua chon cua ban: '), 10);
                        
                        if (choiceUser == 1) {
        
                                let nameUser = readlineSync.question('Nhap vao Username: ');
                                let password = readlineSync.question('Nhap vao password: ');
                                let money: number = +readlineSync.question('Nhap vao so tien: ');

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                let email: string = '';
                                console.log('Bạn có muốn nhập địa chỉ Email (y/n)? ');
                                if (yesNo() === 'y') {
                                    do {
                                        email = readlineSync.question('Nhap vao dia chi Email: ');
                                        console.log(!emailRegex.test(email) ? 'Định dạng Email không đúng' : 'Nhập địa chỉ Email thành công');
                                    } while (!emailRegex.test(email));
                                }

                                let age: number | undefined;
                                console.log('Bạn có muốn nhập tuổi (y/n)? ');
                                if (yesNo() === 'y') {
                                    do {
                                        age = +readlineSync.question('Nhap tuoi: ');
                                        console.log(age < 18 ? 'Bạn chưa đủ 18' : 'Nhập tuổi thành công');
                                    } while (age < 18);
                                }

                                let address: string | undefined;
                                console.log('Bạn có muốn nhập địa chỉ (y/n)? ');
                                if (yesNo() === 'y') {
                                    address = readlineSync.question('Nhập địa chỉ: ');
                                }

                                let gender: string | undefined;
                                console.log('Bạn có muốn nhập giới tính (y/n)? ');
                                if (yesNo() === 'y') {
                                    const genderOption: string[] = ['Nam', 'Nữ'];
                                    const index = readlineSync.keyInSelect(genderOption, 'Lua chon cua ban: ', {cancel: false}) + 1;
                                    switch (index) {
                                        case 1:
                                            gender = 'Nam';
                                            break;
                                        case 2:
                                            gender = 'Nữ';
                                            break
                                    }
                                }
                                UserManager.createAccount(nameUser, password, money, email, age, address, gender)
                            }
                        if (choiceUser == 2) {  
                            console.log('Chọn một trong các lựa chọn sau:');
                            console.log('1. Xem mật khẩu tài khoản');
                            console.log('2. Đổi mật khẩu tài khoản');
                            let choicePassword = readlineSync.question('Lua chon cua ban: ');
        
                            if (choicePassword == 1) {
                                let name = readlineSync.question('Nhap vao Username can tim mat khau: ');
                                UserManager.getPasswordByName(name);

                            } else if (choicePassword == 2) {
                                let name = readlineSync.question('Nhap vao Username can doi mat khau: ');
                                let newPassword = readlineSync.question('Nhap vao mat khau moi: ');
                                UserManager.setPasswordByName(name, newPassword)

                            } else {
                                console.log('Không có lựa chọn này!');
                            }
                        }
                        if (choiceUser == 3) { 
                            let nameDeleted = readlineSync.question('Nhap ten Username muon xoa: ');
                            UserManager.deleteAccount(nameDeleted);
                        }

                        if (choiceUser == 4) {  
                            console.log('Danh sách tài khoản:');
                            UserManager.getSize();
                            UserManager.showListUser();
                        }
                        
                        if (choiceUser == 5) {  
                            let nameMoney = readlineSync.question('Nhap ten Username muon kiem tra tien: ')
                            UserManager.getMoneyByName(nameMoney);
                        }

                        if (choiceUser == 6) {  
                            let nameMoneyAdded = readlineSync.question('Nhap ten Username muon nap tien: ')
                            let money = +readlineSync.question('Nhap vao so tien: ');
                            UserManager.addMoneyByName(nameMoneyAdded, money);
                        }

                        if (choiceUser == 7) {  
                            let nameMoneySet = readlineSync.question('Nhap ten Username muon chinh tien: ')
                            let newMoney = +readlineSync.question('Nhap vao so tien: ');
                            UserManager.setMoneyByName(nameMoneySet, newMoney)
                        }

                        if (choiceUser == 8) {  
                            let userName = readlineSync.question('Nhap Username: ')
                            let passWord = readlineSync.question('Nhap Password: ')
                            let id = +readlineSync.question('Nhap id may tinh muon dang nhap: ')
                            UserManager.login(userName, passWord, id);
                        }

                        if (choiceUser == 9) {  
                            let userName = readlineSync.question('Nhap Username muon dang xuat: ')
                            UserManager.logoff(userName);
                        }
                        
                        if (choiceUser == 10) {  
                            let userName = readlineSync.question('Nhap Username muon kiem tra: ')
                            UserManager.getOnlineTimeComputerByName(userName);
                        }

                        if (choiceUser == 11) {  
                            UserManager.decreaseMoneyByTime();
                        }

                        if (choiceUser == 12) {  
                            console.log('Trở về Menu trước!');
                            choiceUser = 0;
                        }
                    }
                    break;
            
                case 9:
                    break;

                case 10:
                    console.log('Bạn đã đăng xuất thành công!');
                    choiceMenu = 0;
                    break;

                case 0:
                    console.log('Bạn đã chọn lựa chọn thoát. Hẹn gặp lại!');
                    process.exit();
        
                default:
                    console.log('Lựa chọn không hợp lệ, vui lòng thử lại.');
                    break;
                }
            }
        }   
}                
