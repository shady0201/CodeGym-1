import { User } from "./User";
import { ComputerManager } from "../ComputerManager/ComputerManager";
import { Computer } from "../ComputerManager/Computer";
let readlineSync = require('readline-sync');

export class UserManager {
    private static listUser: User[] = [];

    constructor() {
        UserManager.listUser = [];
        UserManager.listUser.push(new User('Hoang Anh', '123', 10000),
                                 new User('Quynh', '123', 5000),
                                 new User('Test', '123', 1000))
    }

    static showListUser() {
        console.table(this.listUser);
    }

    static getList(): User[] {
        return this.listUser;
    }

    static decreaseMoneyByTime(): void {
        this.listUser.forEach(user => {
            user.decreaseMoneyByTime()
        })
    }

    static nameIsExist(name: string): boolean {
        return this.listUser.some(user => user.getName() === name);
    }
    
    static createAccount(name: string, password: string, money: number, email?: string, age?: number, address?: string, gender?: string): void {
        this.nameIsExist(name)
            ? console.log(`Tài khoản "${name}" đã tồn tại`)
            : (this.listUser.push(new User(name, password, money, email, age, address, gender)),
                console.log(`Tài khoản "${name}" đã được tạo`));
    }

    static deleteAccount(name: string): void {    
        let indexAccount = this.getIndexByName(name);

        if (indexAccount >= 0) {
        
            console.log(`Bạn có chắc chắn muốn xóa "${this.listUser[indexAccount].getName()}" không?`);
            console.log("Nhap 1 để xóa, 0 để hủy.");
        
            let choice = +readlineSync.question('Lua chon: ');
        
            if (choice === 1) {
                console.log(`Đã xóa thành công User "${this.listUser[indexAccount].getName()}".`);
                this.listUser.splice(indexAccount, 1);       
                UserManager.showListUser();
                return;
            } 
            
            if (choice === 0) {
                console.log("Hủy thao tác xóa User.");
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
        }       
    }

    static getSize(): number {
        console.log(`Tổng số lượng tài khoản là: ${this.listUser.length}`)
        return this.listUser.length;
    }

    static getIndexByName(name : string) {
        let accountIndex = this.listUser.findIndex(account => account.getName() === name);

        if (accountIndex === -1) {
          console.log(`Không tìm thấy tài khoản với tên ${name}!`);
        }
        return accountIndex;
    }

    static getMoneyByName(name: string): number {
        let userIndex: number = this.getIndexByName(name);
        console.log(`Tài khoản "${name}" có số tiền là: ${this.listUser[userIndex].getMoney().toLocaleString()} VND`);
        return this.listUser[userIndex].getMoney();
    }

    static setMoneyByName(name: string, newMoney: number): void {
        let userIndex: number = this.getIndexByName(name);
        let oldMoney: number = this.listUser[userIndex].getMoney()
        this.listUser[userIndex].setMoney(newMoney);
        console.log(`Tài khoản "${name}" có số tiền mới từ ${oldMoney.toLocaleString()} thành : ${newMoney.toLocaleString()} VND`);
    }

    static addMoneyByName(name: string, money: number): void {
        let userIndex: number = this.getIndexByName(name);
        let newMoney: number = this.listUser[userIndex].getMoney() + money;
        console.log(`Tài khoản "${name}" nạp thêm ${money.toLocaleString()} VND vào tài khoản!`)
        this.setMoneyByName(name, newMoney);
    }

    static getPasswordByName(name: string): void {
        let userIndex: number = this.getIndexByName(name);
        console.log(`Tài khoản "${name}" có mật khẩu là: ${this.listUser[userIndex].getPassword()}`);
    }

    static setPasswordByName(name: string, newPassword: string): void {
        let userIndex: number = this.getIndexByName(name);
        let oldPassword: string = this.listUser[userIndex].getPassword();
        this.listUser[userIndex].setPassword(newPassword);
        console.log(`Tài khoản "${name}" thay đổi mật khẩu từ "${oldPassword}" thành: ${this.listUser[userIndex].getPassword()}`);
    }

    static login(userName: string, password: string, id: number): boolean | undefined {
        let userIndex: number = this.getIndexByName(userName);
        let user: User = this.getList()[userIndex];
        let clientIndex: number = ComputerManager.findComputerByIndex(id);

        if (clientIndex >=0) {
            let client = ComputerManager.getList()[clientIndex];
            
            if (password === user.getPassword() && !user.getOnline() && client.getUsedBy() === null) {
                client.login(userName);
                user.setOnline(true);
                console.log(`Tài khoản "${userName}" đăng nhập thành công vào "Computer ${id}"`);
                return true;
            } else if (password !== user.getPassword()) {
                console.log(`Sai mật khẩu`);
            } else if (user.getOnline()) {
                console.log(`Tài khoản đang được sử dụng`);
            } else {
                console.log(`Tài khoản đang được sử dụng`);
            }
         }
    }

    static logoff(userName: string): void {
        let userIndex: number = this.getIndexByName(userName);
        if (this.listUser[userIndex].getOnline()) {
            this.listUser[userIndex].setOnline(false);
            ComputerManager.getList().forEach(computer => {
                if (computer.getUsedBy() === userName) {
                    computer.turnoff();
                    console.log(`Tài khoản "${userName}" đã đăng xuất thành công tại "${computer.getName()}"`);
                }
            })
        } 
    }

    static getOnlineTimeComputerByName(name: string) {
        let onlineComputers: string[] = [];  
        let userIndex: number = this.getIndexByName(name);
        if (userIndex >= 0) {
            ComputerManager.getList().filter(computer => {
            if (computer.getUsedBy() === name) {
                onlineComputers.push(computer.getName());
            }
            });
            console.log(`Tài khoản "${name}" đang được sử dụng trên: ${onlineComputers}, thời gian sử dụng là ${this.listUser[userIndex].getOnlineTime()} giây`);
            return onlineComputers;
        }
    }

    static getOnlineTimeByName(name: string) {
        let userIndex: number = this.getIndexByName(name);
        if (userIndex >= 0) {
         console.log(`Tài khoản "${name}" đã Online được: ${this.listUser[userIndex].getOnlineTime()} giây`);;    
       }
    }
    
    static decreaseMoneyByOrder(name: string, money: number): void {
        money *= -1
        this.addMoneyByName(name, money);
    }
}

// new UserManager();
// UserManager.getIndexByName('Quynh');
// UserManager.getMoneyByName('Quynh');
// UserManager.setMoneyByName('Quynh', 10000);
// UserManager.addMoneyByName('Quynh', 2000);
// UserManager.getPasswordByName('Quynh');
// UserManager.setPasswordByName('Quynh', 'gia')
// UserManager.login('Hoang Anh','123', 3)
// UserManager.login('Quynh', '123', 2)
// UserManager.logoff('Quynh')
// UserManager.showList()
// ComputerManager.showOnlineComputers()
// ComputerManager.showOfflineComputers()
// UserManager.getOnlineTimeComputerByName('Hoang Anh')
// UserManager.getOnlineTimeByName('Hoang Anh')
// UserManager.logoff('Quynh')