export class Computer {
    private readonly id: number;
    private name: string;
    private UsedBy: null | string = null;
  
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
  
    getId(): number {
        return this.id;
    }
  
    getName() : string {
      return this.name
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getUsedBy(): null | string {
      return this.UsedBy;
    }
  
    login(name: string): void {
        this.UsedBy = name;
    }
  
    turnoff(): void {
        this.UsedBy = null;
    }
  }