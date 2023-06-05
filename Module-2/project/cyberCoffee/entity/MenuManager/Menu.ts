export class Menu {
    private _id: number
    private _nameService: string
    private _price: number

    public get_id(): number {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get_nameService(): string {
        return this._nameService;
    }

    public set_nameService(_nameService: string): void {
        this._nameService = _nameService;
    }

    public get_price(): number {
        return this._price;
    }

    public set_price(_price: number): void {
        this._price = _price;
    }


    constructor(id: number, nameService: string, price: number) {
        this._id = id
        this._nameService = nameService
        this._price = price
    }
}