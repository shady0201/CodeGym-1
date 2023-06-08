export class People {
    private _name: string;
    private _age: number;

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

    public get_age(): number {
        return this._age;
    }

    public set_age(_age: number): void {
        this._age = _age;
    }

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

}   