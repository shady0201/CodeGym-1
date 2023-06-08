import { Computer } from "./Computer";
let readlineSync = require('readline-sync');

enum ComputerStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE"
}

export class ComputerManager {
    static listComputer: Computer[];
    
    constructor() {
      ComputerManager.listComputer = [];
      ComputerManager.listComputer.push(new Computer(1, "Computer 1", ComputerStatus.ONLINE),
                            new Computer(2, "Computer 2", ComputerStatus.OFFLINE),
                            new Computer(3, "Computer 3", ComputerStatus.ONLINE))
    }
    
    static sortComputersById(): void {
      this.listComputer.sort((a, b) => a.get_id() - b.get_id());
    }

    static showListComputer(): void {
      console.table(this.listComputer)
    }

    static showOnlineComputers(): void {
      let onlineComputers = this.listComputer.filter(computer => computer.get_status() === ComputerStatus.ONLINE);
      console.table(onlineComputers);
    }

    static showOfflineComputers(): void {
      let offlineComputers = this.listComputer.filter(computer => computer.get_status() === ComputerStatus.OFFLINE);
      console.table(offlineComputers);
    }
    
    static selectComputer(index: number): Computer {
      return this.listComputer[index - 1];
    } 

    static addComputer() {
      let totalComputer = readlineSync.question('Nhap vao so may can them: ');
      for (let i = 1; i <= totalComputer; i++) {
          let id = parseFloat(readlineSync.question(`Nhap vao id may ${i}: `));

          let myComputer = this.findComputerByIndex(id);
          if (myComputer !== -1) {
              console.log("ID máy đã tồn tại!");
              return; 
          }
          let name = readlineSync.question(`Nhap vao ten may: `);
          let status = readlineSync.question('Nhap vao trang thai (ONLINE hoac OFFLINE): ');
          let statusUppered = status.toUpperCase()

            if (statusUppered === ComputerStatus.ONLINE || statusUppered === ComputerStatus.OFFLINE) {
                let computer = new Computer(id, name, statusUppered);
                this.listComputer.push(computer);
            } else {
                console.log("Trang thai may khong hop le.");
            }
      }
    }

    static findComputerByIndex(id: number) {
      let computerIndex = this.listComputer.findIndex(computer => computer.get_id() === id);

      if (computerIndex === -1) {
        console.log(`Khong tim thay may voi ID ${id}!`);
      }
      return computerIndex;
    }

    static editComputer(): void {
      let id = +readlineSync.question('Nhap vao so ID can sua: ');
      
      let indexComputer = this.findComputerByIndex(id);

      if (indexComputer >= 0) {
        let name = readlineSync.question(`Nhap vao ten moi (dang la "${this.listComputer[indexComputer].get_name()}"): `) || this.listComputer[indexComputer].get_name();
        let status = readlineSync.question(`Nhap vao trang thai moi (ONLINE hoac OFFLINE, dang la "${this.listComputer[indexComputer].get_status()}"): `) || this.listComputer[indexComputer].get_status();
      
        let statusUppered = status.toUpperCase()
        if (statusUppered !== ComputerStatus.ONLINE && statusUppered !== ComputerStatus.OFFLINE) {
          console.log("Trang thai may khong hop le!");
          return;
        }
      
        let editedComputer = new Computer(id, name, statusUppered);
        this.listComputer[indexComputer] = editedComputer;
      }
    } 

    static removeComputer(): void {
      let id = +readlineSync.question('Lua chon ID may tinh muon xoa: ');
    
      let indexComputer = this.findComputerByIndex(id);
      
      console.log(`Bạn có chắc chắn muốn xóa máy tính "${this.listComputer[indexComputer].get_name()}" không?`);
      console.log("Nhap 1 để xóa, 0 để hủy.");
    
      let choice = +readlineSync.question('Lua chon: ');
    
      if (choice === 1) {
          this.listComputer.splice(indexComputer, 1);
          console.log(`Đã xóa thành công máy tính có ID ${id}.`);
      } 
      
      if (choice === 0) {
          console.log("Hủy thao tác xóa máy tính.");
      } else {
          console.log("Lựa chọn không hợp lệ!");
      }
    }     
}






