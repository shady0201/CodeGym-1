var Product = /** @class */ (function () {
    function Product(id, name, price, amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getAmount = function () {
        return this.amount;
    };
    return Product;
}());
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
    }
    ManageProduct.prototype.add = function (product) {
        this.listProduct.push(product);
    };
    ManageProduct.prototype.edit = function (id, product) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].getId() === id) {
                this.listProduct[i] = product;
            }
        }
    };
    ManageProduct.prototype.delete = function (id) {
        this.listProduct = this.listProduct.filter(function (item) { return item.getId() !== id; });
        this.listProduct.splice(id, 1);
    };
    ManageProduct.prototype.show = function () {
        console.table(this.listProduct);
    };
    ManageProduct.prototype.findProductByCode = function (name) {
        var foundProduct = this.listProduct.find(function (item) { return item.getName() === name; });
        return foundProduct;
    };
    ManageProduct.prototype.searchProduct = function (search) {
        var searchProduct = this.listProduct.filter(function (product) { return product.getName().toLowerCase().includes(search.toLowerCase()) || product.getName().includes(search); });
        return searchProduct;
    };
    ManageProduct.prototype.countProduct = function (price) {
        var count = this.listProduct.filter(function (product) { return product.getPrice() > price; }).length;
        return count;
    };
    return ManageProduct;
}());
var mp = new ManageProduct();
mp.add(new Product('1', 'IP', 10, 10));
mp.add(new Product('2', 'SS', 200, 50));
mp.add(new Product('3', 'IS', 500, 60));
// mp.edit('2', new Product('3', 'SS', 2000, 50));
// mp.show();
// mp.delete('1')
// mp.show();
var codeFound = mp.findProductByCode('IP');
var mbFound = mp.searchProduct('I');
var countPrice = mp.countProduct(50);
console.log(codeFound);
console.log(mbFound);
console.log(countPrice);
