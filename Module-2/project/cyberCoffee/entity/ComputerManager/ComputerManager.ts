import { Computer } from "./Computer";

let readlineSync = require('readline-sync');

export class ComputerManager {
    static listComputer: Computer[];
    static currentName: number = 4;
    
    constructor() {
      ComputerManager.listComputer = [];
      ComputerManager.listComputer.push(new Computer(1, "Computer 1"),
                            new Computer(2, "Computer 2"),
                            new Computer(3, "Computer 3"))
    }
    
    static sortComputersById(): void {
      this.listComputer.sort((a, b) => a.getId() - b.getId());
    }

    static showListComputer(): void {
      console.table(this.listComputer)
    }

    static getList(): Computer[] {
      return this.listComputer;
    }

    static selectComputer(index: number): Computer {
      return this.listComputer[index - 1];
    } 

    static addComputer(numberOfComputerWantToBuy: number, name: string): void {
      for (let i: number = 0; i < numberOfComputerWantToBuy; i++) {
        let indexName = name + ' ' + this.currentName
        this.listComputer.push(new Computer(this.currentName, indexName));
        console.log(`"${indexName}" có ID "${this.currentName}" đã được thêm`);
        this.currentName++;   
      }
    }

    static showOnlineComputers(): void {
      let onlineComputers = this.listComputer.filter((computer) => computer.getUsedBy());
      if (onlineComputers.length > 0) {
        console.log('Danh sách máy tính đang Online:');
        console.table(onlineComputers);
      } else {
        console.log('Không có máy tính nào đang Online');   
      }
    }
  
    static showOfflineComputers(): void {
      let offlineComputers = this.listComputer.filter((computer) => !computer.getUsedBy());
      console.log('Danh sách máy tính đang Offline:');
      console.table(offlineComputers);
    }
    
    static findComputerByIndex(id: number) {
      let computerIndex = this.listComputer.findIndex(computer => computer.getId() === id);

      if (computerIndex === -1) {
        console.log(`Khong tim thay may voi ID ${id}!`);
      }

      return computerIndex;
    }

    static editComputer(id: number, newName: string): void {
      let index = this.findComputerByIndex(id);
      
      if (index >= 0) {
        let computer = this.listComputer[index];
        let oldName = computer.getName();
        
        computer.setName(newName);
        
        console.log(`Đã đổi tên máy tính "${oldName}" thành "${newName}".`);
        ComputerManager.showListComputer();
      }
    }
    
    static removeComputer(): void {
      let id = +readlineSync.question('Lua chon ID may tinh muon xoa: ');
    
      let indexComputer = this.findComputerByIndex(id);

      if (indexComputer >= 0) {
      
          console.log(`Bạn có chắc chắn muốn xóa "${this.listComputer[indexComputer].getName()}" không?`);
          console.log("Nhap 1 để xóa, 0 để hủy.");
        
          let choice = +readlineSync.question('Lua chon: ');
        
          if (choice === 1) {
              this.listComputer.splice(indexComputer, 1);
              console.log(`Đã xóa thành công "${this.listComputer[indexComputer].getName()}".`);
              ComputerManager.showListComputer();
              return;
          } 
          
          if (choice === 0) {
              console.log("Hủy thao tác xóa máy tính.");
          } else {
              console.log("Lựa chọn không hợp lệ!");
          }
      }       
    }
}

// new ComputerManager()
// ComputerManager.addComputer(3, 'Computer ');
// ComputerManager.editComputer(8, 'Quynh')
// ComputerManager.removeComputer()





