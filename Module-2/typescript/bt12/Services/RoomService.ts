import { RService } from "./RService";
import { RoomManage } from "../entity/RoomManage";

export class RoomService implements RService<RoomManage> {
    private listRoom: RoomManage[] = [];

    addRoom(room: RoomManage) {
        this.listRoom.push(room)
    }

    displayRooms() {
        console.table(this.listRoom)
    }

    updateRoomById(roomId: number, updatedRoom: RoomManage) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].get_roomId() === roomId) {
                this.listRoom[i] = updatedRoom;
            }
        }
    }

    displayAvailableRooms() {
        let roomAvailabled = this.listRoom.filter(room => room.is_isAvailable() === true);
        console.log('Hiển thị phòng còn trống:');
        console.table(roomAvailabled);
    }

    getRoomById(roomId: number) {
        let roomIndexById = this.listRoom.find(room => room.get_roomId() === roomId);
        console.log('Tìm kiếm phòng theo ID:', roomId);
        console.log(roomIndexById);
    }

    searchRoomsByPrice(minPrice: number, maxPrice: number) {
        let roomIndexByPrice = this.listRoom.filter(room => room.get_price() >= minPrice && room.get_price() <= maxPrice);
        console.log('Tìm kiếm phòng theo khoảng giá tiền từ:', minPrice + '-' + maxPrice)
        console.table(roomIndexByPrice);  
    }
}

const myRoom = new RoomService();

myRoom.addRoom(new RoomManage(1,'A',100,true));
myRoom.addRoom(new RoomManage(2,'B',200,false));
myRoom.addRoom(new RoomManage(3,'C',300,true));

myRoom.displayAvailableRooms()
// myRoom.displayRooms();


