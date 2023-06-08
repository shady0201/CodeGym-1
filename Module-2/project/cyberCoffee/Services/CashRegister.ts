export class CashRegister {
    private id: number
    private username: string
    private password: string

    public get_id(): number {
        return this.id;
    }

    public get_username(): string {
        return this.username;
    }

    public get_password(): string {
        return this.password;
    }

    constructor(id: number, username: string, password: string) {
        this.id = id
        this.username = username
        this.password = password
    }

}