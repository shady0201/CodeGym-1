let readlineSync = require('readline-sync');
import { LService } from "./LServices";
import { Lover } from "../entity/Lover";

export class MyLover implements LService<Lover> {
    private listLover: Lover[] = [];

    showLover() {
        if (this.listLover.length > 0) {
        console.table(this.listLover);
        }
        else {
            console.log('Không có dữ liệu');
        }
    }

    searchLoverByName(search: string) {
        const filteredLover = this.listLover.filter(lover => lover.get_name().toLowerCase().includes(search.toLowerCase())|| lover.get_name().includes(search));
        if (filteredLover.length > 0) {
            for (let i = 0; i < filteredLover.length; i++) {
                const lover = filteredLover[i];
                console.log(`Mã người yêu: ${lover.get_id()}`);
                console.log(`Tên người yêu: ${lover.get_name()}`);
                console.log(`Cung hoàng đạo: ${lover.get_zodiac()}`);
                console.log(`Quê quán: ${lover.get_address()}`);
                console.log(`Năm sinh: ${lover.get_date()}`);
            }
        } else {
            console.log('Không có dữ liệu');
        }
    }
    
    addLover() {
        const totalLover = readlineSync.question('Nhap vao so luong Lover can them: ');
        for (let i = 1; i <= totalLover; i++) {
            let id = readlineSync.question(`Nhap vao ID ${i}: `);
            let name = readlineSync.question('Nhap vao ten: ');
            let zodiac = readlineSync.question('Nhap vao cung hoang dao: ');
            let address = readlineSync.question('Nhap vao dia chi: ');
            let date = parseFloat(readlineSync.question('Nhap vao so thich: '));
                if (date > 0) {
                    return date;
                } else {
                    console.log("Date không phải là số dương", date);
                }
            let hobbies = readlineSync.question('Nhap vao so thich: ');
    
            let lover = new Lover(id, name, zodiac, address, date, hobbies);
            this.listLover.push(lover);
        }
    }

    editLover() {
        let id = readlineSync.question('Nhap vao ID can sua: ');

        let idEdited = readlineSync.question('Nhap vao ID: ');
        let nameEdited = readlineSync.question('Nhap vao ten: ');
        let zodiacEdited = readlineSync.question('Nhap vao cung hoang dao: ');
        let addressEdited = readlineSync.question('Nhap vao luong: ');
        let dateEdited = parseFloat(readlineSync.question('Nhap vao luong: '));
        let hobbiesEdited = readlineSync.question('Nhap vao so thich: ');

        let loverEdited = new Lover(idEdited, nameEdited, zodiacEdited, addressEdited, dateEdited, hobbiesEdited);
        const index = this.listLover.findIndex(lover => lover.get_id() === id);
        if (index !== -1) {
            this.listLover[index] = loverEdited;
        } else {
            console.log('Không tồn tại người yêu cần cập nhật');
        }
    }

    deleteLover(id: number) {
        const index = this.listLover.findIndex(lover => lover.get_id() === id);
        if (index !== -1) {
            this.listLover.splice(index, 1);
            console.log('Xóa thành công');
            
        } else {
            console.log('Không tồn tại người yêu cần xóa');
        }
    }
}

// const myLover = new MyLover();

// myLover.addLover(new Lover(123, 'Quynh', 'Gemini', 'Nam Định', 1993, ['Work', 'Sing']));
// myLover.addLover(new Lover(456, 'Hoang Anh', 'Libra', 'Hà Nội', 1997, ['Travel', 'Sing']));
// myLover.addLover(new Lover(135, 'A', 'Libra', 'Hà Nội', 1997, ['Food', 'Sing']));
// myLover.addLover(new Lover(279, 'B', 'Scorpion', 'Hải Phòng', 1995, ['Travel', 'Sing']));
// myLover.addLover(new Lover(321, 'C', 'Aries', 'Hà Nội', 1992, ['Travel', 'Food']));

// myLover.showLover()
// myLover.searchLoverByName('Q');

// myLover.deleteLover(123);
// myLover.editLover(135, new Lover(696, 'Thi Quynh', 'Libra', 'Hà Nội', 1997, ['Travel', 'Sing']));
// myLover.showLover()