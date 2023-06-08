enum ComputerStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE"
}

export class Computer {
    private id: number
    private name: string
    private status: ComputerStatus

    constructor(id: number, name: string, status: ComputerStatus) {
        this.id = id
        this.name = name
        this.status = status
    }

    public get_id(): number {
        return this.id;
    }

    public get_name(): string {
        return this.name;
    }

    public get_status(): ComputerStatus {
        return this.status;
    }

}

