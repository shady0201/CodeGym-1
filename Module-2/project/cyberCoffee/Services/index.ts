import { AccountManagement } from "../entity/AccountManagement";
import { ComputerManager } from "../entity/ComputerManager/ComputerManager";
import { MenuServices } from "../entity/MenuManager/MenuServices";

let readlineSync = require('readline-sync');

new AccountManagement();
new ComputerManager()
new MenuServices()

// let choice = -1;
// while (choice != 0) {
//     console.log('Nhập vào lựa chọn:' +
//         '\n 1. Login' +
//         '\n 2. Exit')
//     choice = readlineSync.question('Lua chon cua ban: ');

//     if (choice == 1) {
//         console.log('Nhập vào thông tin đăng nhập');
//         let userName = readlineSync.question('Ten dang nhap: ');
//         let userNameUppered = userName.toUpperCase();
//         let passWord = readlineSync.question('Mat khau: ')
//         myUserCashRegister.login(userNameUppered, passWord);
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
                    '\n 0. Exit');
                    
                choiceMenu = parseInt(readlineSync.question('Lua chon cua ban: '), 10); // parse input as number
                
                switch (choiceMenu) {
                    case 1:
                        let choiceListComputer = -1; 
                            while (choiceListComputer != 0) {
                                console.log('Nhập vào lựa chọn:' +
                                    '\n 1. Hiển thị toàn bộ máy' +
                                    '\n 2. Hiển thị toàn bộ máy Online' +
                                    '\n 3. Hiển thị toàn bộ máy Offline')
                
                                    choiceListComputer = readlineSync.question('Lua chon cua ban: ');

                                if (choiceListComputer == 1) {
                                    ComputerManager.showListComputer();
                                    ComputerManager.sortComputersById();
                                    let index = readlineSync.question('Lua chon hien thi so may: ');
                                    let selectedComputer = ComputerManager.selectComputer(index);
                                    console.log(`Thông tin máy: ${selectedComputer.get_name()} - ${selectedComputer.get_status()}`);
                                }

                                if (choiceListComputer == 2) {
                                    ComputerManager.showOnlineComputers();
                                }
                                
                                if (choiceListComputer == 3) {
                                    ComputerManager.showOfflineComputers();
                                }
                                        
                        }
                        break;

                    case 2:
                        ComputerManager.addComputer();
                        break;

                    case 3:
                        ComputerManager.editComputer();
                        break;

                    case 4:
                        ComputerManager.removeComputer();
                        break;

                    case 5:
                        MenuServices.addMenuServices();     
                        MenuServices.showMenuServices(); 
                        break;

                    case 6:
                        // Code for handling choice 6
                        break;

                    case 7:
                        // Code for handling choice 7
                        break;

                    case 8:
                        let choiceUserCashRegister = -1; 

                        while (choiceUserCashRegister != 0) {
                            console.log('Nhập vào lựa chọn:' +
                            '\n 1. Thêm mới' +
                            '\n 2. Sửa' +
                            '\n 3. Xóa' +
                            '\n 4. Danh sách các tài khoản')
                            
                            choiceUserCashRegister = readlineSync.question('Lua chon cua ban: ');
                            
                            if (choiceUserCashRegister == 1) {
                                let id = +readlineSync.question('Nhap vao ID: ')
                                let userName = readlineSync.question('Nhap vao Username: ');
                                let passWord = readlineSync.question('Nhap vao Password: '); 
                                AccountManagement.regisration(id, userName, passWord);    
                                AccountManagement.showUserCashRegister();           
                            }
                            
                            if (choiceUserCashRegister == 2) {
                                AccountManagement.editAccount()
                            }
                            
                            if (choiceUserCashRegister == 3) {
                                AccountManagement.showUserCashRegister();
                            }          
                        }
                        break;

                    case 9:
                        MenuServices.addMenuServices();     
                        MenuServices.showMenuServices(); 
                        break;

                    case 0:
                        // Code for handling exit

                    }

                    
                }