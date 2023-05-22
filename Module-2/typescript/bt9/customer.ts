export class Customer {
    private _date: number;
    private _code: number;
    private _name: string;

    constructor(
        name: string,
        date: number,
        code: number,
    ) {
        this._name = name
        this._date = date
        this._code = code
    }

    public get_date(): number {
        return this._date;
    }

    public set_date(_date: number): void {
        this._date = _date;
    }

    public get_code(): number {
        return this._code;
    }

    public set_code(_code: number): void {
        this._code = _code;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

    display() {
        console.log(`Tên KH: ${this._name}, Số ngày thuê: ${this._date}, CMND: ${this._code}`)
    }

    calculateRoomFee(rate: number): number {
        let fee = rate * this._date;
        return fee;
    }

    calculateTotalDays(): number {
        return this._date;
    }
}