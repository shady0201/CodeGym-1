"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Product_1 = require("./Product");
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.edit = function (code, product) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                this.products[i] = product;
            }
        }
    };
    Inventory.prototype.removeProduct = function (code) {
        for (var i = 0; i < this.products.length; i++) {
            var product = this.products[i];
            if (product.code == code) {
                this.products.splice(i, 1);
            }
        }
    };
    Inventory.prototype.findProductByCode = function (code) {
        var foundProduct = this.products.find(function (item) { return item.code === code; });
        return foundProduct;
    };
    Inventory.prototype.searchProduct = function (search) {
        var searchProduct = this.products.filter(function (product) { return product.name.toLowerCase().includes(search.toLowerCase()) || product.name.includes(search); });
        return searchProduct;
    };
    Inventory.prototype.showProducts = function () {
        console.log("Danh sách sản phẩm:");
        for (var i = 0; i < this.products.length; i++) {
            console.log("".concat(this.products[i].code, " - ").concat(this.products[i].name, " - ").concat(this.products[i].price, " - ").concat(this.products[i].quantity));
        }
    };
    return Inventory;
}());
exports.Inventory = Inventory;
var myInventory = new Inventory();
myInventory.addProduct(new Product_1.Product(123, 'IP', 100, 2));
myInventory.showProducts;
