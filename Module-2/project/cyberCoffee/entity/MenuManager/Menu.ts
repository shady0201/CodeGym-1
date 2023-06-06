export class Menu {
    private id: number
    private nameService: string
    private price: number

    public get_id(): number {
        return this.id;
    }

    public set_id(id: number): void {
        this.id = id;
    }

    public get_nameService(): string {
        return this.nameService;
    }

    public set_nameService(nameService: string): void {
        this.nameService = nameService;
    }

    public get_price(): number {
        return this.price;
    }

    public set_price(price: number): void {
        this.price = price;
    }

    constructor(id: number, nameService: string, price: number) {
        this.id = id
        this.nameService = nameService
        this.price = price
    }
}