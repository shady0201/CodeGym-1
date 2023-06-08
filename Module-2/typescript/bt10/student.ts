import { People } from "./people";

export class Student extends People {
    private _point: number;

    public get_point(): number {
        return this._point;
    }

    public set_point(_point: number): void {
        this._point = _point;
    }

    constructor(name: string, age: number, point: number) {
        super(name, age);
        this._point = point;

    }

}
