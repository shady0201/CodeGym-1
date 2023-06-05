import { Client } from "./Client"

export class ClientManager {
    private static listClient: Client[] = [];
    private static currentName: number = 1;

    static getList(): Client[] {
        console.table(this.listClient);
        return this.listClient;
    }

    static buyClient(numberOfClientWantToBuy: number): void {
        for (let i: number = 0; i < numberOfClientWantToBuy; i++) {
            this.listClient.push(new Client(this.currentName));
            console.log(`An client named "${this.currentName}" has been bought`);
            this.currentName++
        }
    }

    static getSize(): number {
        console.log(`the number of clients available is: ${this.listClient.length}`)
        return this.listClient.length;
    }

    static getIndexByName(name : number) {
        let clientIndex = this.listClient.findIndex(client => client.getName() === name);

        if (clientIndex === -1) {
          console.log(`Không tìm thấy tài khoản với tên ${name}!`);
        }
        return clientIndex;
    }

    // static getIndexByName(name: number): number {
    //     for (let i: number = 0; i < this.listClient.length; i++) {
    //         if (this.listClient[i].getName() === name) {
    //             console.log(`Client "${name}" have index: ${i}`)
    //             return i;
    //         }
    //     }
    //     throw new Error(`Can't find client ${name}`) // --------------------------------------------------------------------------
    // }
}

console.log('buy PC')
ClientManager.buyClient(4)
ClientManager.getList()
console.log('--------------------------------')
