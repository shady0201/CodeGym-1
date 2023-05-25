export class RoomManage {
    private _roomId: number
    private _roomType: string
    private _price: number
    private _isAvailable: boolean


    public get_roomId(): number {
        return this._roomId;
    }

    public set_roomId(_roomId: number): void {
        this._roomId = _roomId;
    }

    public get_roomType(): string {
        return this._roomType;
    }

    public set_roomType(_roomType: string): void {
        this._roomType = _roomType;
    }

    public get_price(): number {
        return this._price;
    }

    public set_price(_price: number): void {
        this._price = _price;
    }

    public is_isAvailable(): boolean {
        return this._isAvailable;
    }

    public set_isAvailable(_isAvailable: boolean): void {
        this._isAvailable = _isAvailable;
    }

    constructor(
        roomId: number,
        roomType: string,
        price: number,
        isAvailable: boolean
    ) {
        this._roomId = roomId
        this._roomType = roomType
        this._price = price
        this._isAvailable = isAvailable
    }
}
