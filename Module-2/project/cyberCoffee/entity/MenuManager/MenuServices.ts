import { Menu } from "./Menu";
let readlineSync = require('readline-sync');

export class MenuServices {
    static listMenu: Menu[];

    constructor() {
        MenuServices.listMenu = [];
        MenuServices.listMenu.push(new Menu(1, 'Nước ngọt', 10000),
                           new Menu(2, 'Thuốc lá', 15000))
    }

    static showMenuServices() {
        console.table(MenuServices.listMenu);
    }

    static findServiceById(id: number){
        let serviceFound = this.listMenu.find(menu => menu.get_id() === id);
        return serviceFound;
    }
    
    static addMenuServices() {
        let totalServices = readlineSync.question('Nhap vao so luong Services can them: ');
        for (let i = 1; i <= totalServices; i++) {
            
            let idService = parseFloat(readlineSync.question(`Nhap vao ID Services ${i}: `));
            let myService = this.findServiceById(idService);
            if (myService !== undefined) {
                console.log("Service đã tồn tại!");
                return; 
            }

            let nameService = readlineSync.question(`Nhap vao ten Service: `);
            let priceService = parseFloat(readlineSync.question('Nhap vao gia tien: '));
            let menuServices = new Menu(idService, nameService, priceService);     

            this.listMenu.push(menuServices)
            console.log('Thêm Services thành công!');     
        }
    }
}