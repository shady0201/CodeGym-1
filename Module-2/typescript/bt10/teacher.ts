import { People } from "./people";

export class Teacher extends People {
    private _salary: number;

    public get_salary(): number {
        return this._salary;
    }

    public set_salary(_salary: number): void {
        this._salary = _salary;
    }

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this._salary = salary;

    }
}