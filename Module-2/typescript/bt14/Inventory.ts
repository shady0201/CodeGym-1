import { Product } from "./Product";

export class Inventory {
    listProduct: Product[] = [];

    constructor() {
    this.listProduct = [
        new Product(3, "Product C", 15, 15),
        new Product(4, "Product D", 25, 15)
    ];
    }

    sortProductsById(): void {
        this.listProduct.sort((a, b) => a.code - b.code);
    }

    addProduct(product: Product): void {
        this.listProduct.push(product);
        myInventory.sortProductsById();
    }

    edit(code: number, product: Product) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].code === code) {
                this.listProduct[i] = product;
            }
        }
    }

    removeProduct(code: number): void {
        for (let i = 0; i < this.listProduct.length; i++) {
            let product = this.listProduct[i];

            if (product.code == code) {
                this.listProduct.splice(i, 1); 
            }
        }
    }

    findProductByCode(code: number){
        let foundProduct = this.listProduct.find(item => item.code === code);
        return foundProduct;
    }

    searchProduct(search: string): Product[] {
        let searchProduct = this.listProduct.filter(product => product.name.toLowerCase().includes(search.toLowerCase())|| product.name.includes(search));
        return searchProduct;
    }

    showProducts(): void {
    console.log("Danh sách sản phẩm:");
    // for (let i = 0; i < this.products.length; i++) {
    //     console.log(`${this.products[i].code} - ${this.products[i].name} - ${this.products[i].price} - ${this.products[i].quantity}`);
    // }
    console.table(this.listProduct);
    
    }

    buyProduct(code: number, quantity: number): string {
        let product = this.findProductByCode(code);
    
        if (!product) {
        return "Sản phẩm không tồn tại.";
        }
    
        if (product.quantity < quantity) {
        return "Số lượng sản phẩm không đủ.";
        }
     
        let totalPrice = product.price * quantity;
        product.quantity -= quantity;
    
        return `Mua thành công. Tổng tiền: ${totalPrice}.`;
    }
}

const myInventory = new Inventory();

myInventory.addProduct(new Product(1, "Product A", 10, 5));
myInventory.addProduct(new Product(2, "Product B", 20, 10));

// console.log(myInventory.findProductByCode(3));

// console.log(myInventory.buyProduct(1, 3));   
// console.log(myInventory.buyProduct(2, 9)); 

myInventory.showProducts();