import { CashRegister } from "./CashRegister";
let readlineSync = require('readline-sync');

export class AccountManagement {
    static listAccount: CashRegister[];

    constructor() {
        AccountManagement.listAccount = [];
        AccountManagement.listAccount.push(new CashRegister(1,'THA','123'))
    }

    static showUserCashRegister(){
        console.table(this.listAccount);
    }

    // static accountExists(id: number) {
    //     for(let i=0; i<this.listAccount.length; i++) {
    //       if(this.listAccount[i].get_id() === id) {
    //         return true;
    //       }
    //     }
    //     return false;
    // }

    static accountExists(id: number): boolean {
        return this.listAccount.some(account => account.get_id() === id);
    }

    static login(userName: string, passWord: string) {
        let userLogin;
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].get_username() === userName && this.listAccount[i].get_password() === passWord) {
                userLogin = this.listAccount[i];
                break;
            }
        }
    
        if (!userLogin) {
            console.log('Sai tài khoản hoặc mật khẩu');
        } else {
            console.log(`Xin chào "${userLogin.get_username()}"`);
        }
    }
    
    static register(id: number, userName: string, passWord: string) {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].get_username() == userName && this.listAccount[i].get_id() == id) {
                console.log(`Tài khoản "${userName}" đã có người sử dụng`);              
                return;
            }
            if (this.listAccount[i].get_username() === '') {
                console.log(`Bạn chưa nhập Username`);              
                return;
            }
        }
        let newAccount = new CashRegister(id, userName, passWord)   
        this.listAccount.push(newAccount);     
        console.log(`Thêm tài khoản với Username "${userName}" thành công!`) 
    }

    static findAccountByIndex(id : number) {
        let accountIndex = this.listAccount.findIndex(account => account.get_id() === id);

        if (accountIndex === -1) {
          console.log(`Không tìm thấy tài khoản với ID ${id}!`);
        }
        return accountIndex;
    }

    static editAccount() {
        let id = +readlineSync.question('Nhap vao so ID can sua: ');

        let indexComputer = this.findAccountByIndex(id);
        
        if (indexComputer >= 0) {
            let userNameEdited = readlineSync.question(`Nhap vao ten moi (dang la "${this.listAccount[indexComputer].get_username()}"): `) || this.listAccount[indexComputer].get_username();
            let passWordEdited = readlineSync.question(`Nhap vao Password moi (dang la "${this.listAccount[indexComputer].get_password()}"`)
            
            let editedComputer = new CashRegister(id, userNameEdited, passWordEdited);
            this.listAccount[indexComputer] = editedComputer;
        }
    }
}

