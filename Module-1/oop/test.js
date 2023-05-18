// let listProduct = ["IP", "Oppo"]
// displayList();

// function displayList(){
//     let str = ''
//     for ( let i = 0; i < listProduct.length; i++ ) {
//         str += listProduct[i] + `<button>Edit</button><button onclick="deleteProduct(${i})">Delete</button><br>`
//     }
//     document.getElementById('display').innerHTML = str
// }

// function addProduct(){
//     let newProduct = document.getElementById('name').value.trim()
//     listProduct.push(newProduct);
//     displayList();
//     document.getElementById('name').value = ''
// }

// function deleteProduct(index){
//     alert(index)
// }

// class Cat{
//     constructor(catName, weight, color, age){
//         this.name = catName;
//         this.weight = weight;
//         this.color = color;
//         this.age = age;
//     }
// }

// let myCat1 = new Cat("Thành", 65, "while", 22)
// let myCat2 = new Cat("Trụ", 70, "while", 23)

// console.log(myCat1);
// console.log(myCat2);

// class Rectangle{
//     constructor(length, width){
//     this.length = length;
//     this.width = width;
//     }

//     perimeter(){
//         let perimeterRectangle =  (this.length + this.width) * 2
//         console.log(perimeterRectangle);
//     }
//     area(){
//         let areaRectangle = this.length * this.width
//         console.log(areaRectangle);
//     }
// }

// let hcn = new Rectangle(5,10)

// hcn.perimeter();
// hcn.area();

// class Rectangle{
//     constructor(x, y, w ,h, c){
//         this.x = x
//         this.y = y
//         this.width = w
//         this.height = h
//         this.color = c
//     }

//     draw(){
//         var c = document.getElementById("cv");
//         var rectangle = c.getContext("2d");

//         rectangle.fillStyle = this.color;
//         rectangle.fillRect(this.x, this.y, this.width, this.height);
//     }
// }

// let hcn = new Rectangle(10, 10, 300, 200, 'blue')
// hcn.draw()

class Circle{
    constructor(x, y, w ,h, l, c){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.line = l
        this.color = c
    }

    draw(){
        let c = document.getElementById("cv");
        let circle = c.getContext("2d");
        
        circle.fillStyle = this.color
        circle.beginPath();
        circle.arc(this.x, this.y, this.width, this.height, this.line);
        circle.fill();
    }
}

let ht = new Circle(400, 150, 100, 0, 2*Math.PI, 'blue')
ht.draw();

