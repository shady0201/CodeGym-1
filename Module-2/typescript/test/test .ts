class User {
    private id: number;
    private name: string;
    private email: string;
    private role: number;

    constructor(id: number, name: string, email: string, role: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getRole(): number {
        return this.role;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setRole(role: number): void {
        this.role = role;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Role: ${this.role === 1 ? 'Administrator' : 'Normal User'}`;
    }

    public isAdmin(): boolean {
        return this.role === 1;
    }
}
let user = new User(1, 'John Doe', 'john.doe@example.com', 2);

console.log(user.getInfo());
