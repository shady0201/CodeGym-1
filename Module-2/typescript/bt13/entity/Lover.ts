export class Lover {
    private _id: number
    private _name: string
    private _zodiac: string
    private _address: string
    private _date: number
    private _hobbies: string[]

    public get_id(): number {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

    public get_zodiac(): string {
        return this._zodiac;
    }

    public set_zodiac(_zodiac: string): void {
        this._zodiac = _zodiac;
    }

    public get_address(): string {
        return this._address;
    }

    public set_address(_address: string): void {
        this._address = _address;
    }

    public get_date(): number {
        return this._date;
    }

    public set_date(_date: number): void {
        this._date = _date;
    }

    public get_hobbies(): string[] {
        return this._hobbies;
    }

    public set_hobbies(_hobbies: string[]): void {
        this._hobbies = _hobbies;
    }

    constructor(
        id: number,
        name: string,
        zodiac: string,
        address: string,
        date: number,
        hobbies: string[]
    ) {
        this._id = id
        this._name = name
        this._zodiac = zodiac
        this._address = address
        this._date = date
        this._hobbies = hobbies
    }
}