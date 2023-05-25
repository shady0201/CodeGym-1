"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
var RoomManage_1 = require("../entity/RoomManage");
var RoomService = /** @class */ (function () {
    function RoomService() {
        this.listRoom = [];
    }
    RoomService.prototype.addRoom = function (room) {
        this.listRoom.push(room);
    };
    RoomService.prototype.displayRooms = function () {
        throw new Error("Method not implemented.");
    };
    RoomService.prototype.updateRoomById = function (roomId, updatedRoom) {
        throw new Error("Method not implemented.");
    };
    RoomService.prototype.getAvailableRooms = function () {
        throw new Error("Method not implemented.");
    };
    RoomService.prototype.getRoomById = function (roomId) {
        throw new Error("Method not implemented.");
    };
    RoomService.prototype.searchRoomsByPrice = function (minPrice, maxPrice) {
        throw new Error("Method not implemented.");
    };
    return RoomService;
}());
exports.RoomService = RoomService;
var myRoom = new RoomService();
myRoom.addRoom(new RoomManage_1.RoomManage(1, 'A', 100, true));
myRoom.displayRooms();
