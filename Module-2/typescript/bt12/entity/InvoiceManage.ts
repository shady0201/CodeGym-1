export class InvoiceManage {
    private _id: number
    private _customerName: string
    private _date: Date
    private _amount: number
    
    constructor(
        id: number,
        customerName: string,
        date: Date,
        amount: number
    ) {
        this._id = id
        this._customerName = customerName
        this._date = date
        this._amount = amount
    }

    public get_id(): number {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get_customerName(): string {
        return this._customerName;
    }

    public set_customerName(_customerName: string): void {
        this._customerName = _customerName;
    }

    public get_date(): Date {
        return this._date;
    }

    public set_date(_date: Date): void {
        this._date = _date;
    }

    public get_amount(): number {
        return this._amount;
    }

    public set_amount(_amount: number): void {
        this._amount = _amount;
    }
}