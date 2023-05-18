class Product { // class pojo: biểu dien du lieu
    private id: string;
    private name: string;
    private price: number;
    private amount: number;

    constructor(id: string, name: string, price: number, amount: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getAmount(): number {
        return this.amount;
    }
}

class ManageProduct { // class Manage: quản lý
    private listProduct: Product[] = [];

    constructor() {
    }

    add(product: Product) {
        this.listProduct.push(product)
    }

    edit(id: string, product: Product) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].getId() === id) {
                this.listProduct[i] = product;
            }
        }
    }

    delete(id: string) {
        this.listProduct = this.listProduct.filter(item => item.getId() !== id);
        // this.listProduct.splice(id, 1)
    }

    show() {
        console.table(this.listProduct)
    }

    get(index: number) {
        return this.listProduct[index];
    }

    findProductByCode(name: string){
        let foundProduct = this.listProduct.find(item => item.getName() === name);
        return foundProduct;
    }

    searchProduct(search: string): Product[] {
        let searchProduct = this.listProduct.filter(product => product.getName().toLowerCase().includes(search.toLowerCase())|| product.getName().includes(search));
        return searchProduct;
    }

    countProduct(price: number) {
        let count = this.listProduct.filter(product => product.getPrice() > price).length;
        return count;
    }
}

let mp = new ManageProduct();
mp.add(new Product('1', 'IP', 10, 10));
mp.add(new Product('2', 'SS', 200, 50));
mp.add(new Product('3', 'IS', 500, 60));
// mp.edit('2', new Product('3', 'SS', 2000, 50));
// mp.show();
// mp.delete('1')
// mp.show();

let codeFound = mp.findProductByCode('IP');
let mbFound = mp.searchProduct('I');
let countPrice = mp.countProduct(50);
console.log(codeFound);
console.log(mbFound);
console.log(countPrice);
console.log(mp.get(1).getPrice());