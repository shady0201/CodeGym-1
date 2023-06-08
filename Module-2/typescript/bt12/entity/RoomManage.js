"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomManage = void 0;
var RoomManage = /** @class */ (function () {
    function RoomManage(roomId, roomType, price, isAvailable) {
        this._roomId = roomId;
        this._roomType = roomType;
        this._price = price;
        this._isAvailable = isAvailable;
    }
    RoomManage.prototype.get_roomId = function () {
        return this._roomId;
    };
    RoomManage.prototype.set_roomId = function (_roomId) {
        this._roomId = _roomId;
    };
    RoomManage.prototype.get_roomType = function () {
        return this._roomType;
    };
    RoomManage.prototype.set_roomType = function (_roomType) {
        this._roomType = _roomType;
    };
    RoomManage.prototype.get_price = function () {
        return this._price;
    };
    RoomManage.prototype.set_price = function (_price) {
        this._price = _price;
    };
    RoomManage.prototype.is_isAvailable = function () {
        return this._isAvailable;
    };
    RoomManage.prototype.set_isAvailable = function (_isAvailable) {
        this._isAvailable = _isAvailable;
    };
    return RoomManage;
}());
exports.RoomManage = RoomManage;
