import { CashRegister } from "./CashRegister";
let readlineSync = require('readline-sync');

export class AccountManagement {
    static listAccount: CashRegister[];

    constructor() {
        AccountManagement.listAccount = [];
        AccountManagement.listAccount.push(new CashRegister(1,'THA','123'))
    }

    static showUserCashRegister(){
        console.log(this.listAccount);
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
            console.log('Invalid username or password');
        } else {
            console.log('Welcome ' + userLogin.get_username());
        }
    }
    
    static regisration(id: number, userName: string, passWord: string) {
        let newAccount = new CashRegister(id, userName, passWord)    

        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].get_username() == userName && this.listAccount[i].get_id() == id) {
                console.log('Tài khoản đã có người sử dụng');              
                return;
            }
        }
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

