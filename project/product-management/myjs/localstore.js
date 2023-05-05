class MyLocalData{
    #products = []

    findProductByCode(code){
        let foundProduct = this.#products.find(item => item.code === code);
        return foundProduct;
    }

    searchProduct(search){
        let result = [];
        for (let i = 0; i < this.#products.length; i++) {
            let product = this.#products[i];

            if (product.name.includes(search) || product.code == search) {
                result.push(product);
            }
        }
        return result;
    }

    getProducts(){
        return this.#products;
    }

    addNewProduct(product){
        this.#products.push(product);
        let sProducts = JSON.stringify(this.#products);
        localStorage.setItem('cards', sProducts);
    }

    loadProducts(){
        let localData = localStorage.getItem('cards');
        let data = JSON.parse(localData);
        if (data != null) {
            this.#products = data;
        }
    }
}

const myLocal = new MyLocalData();

