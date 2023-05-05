// class Animal{
//     #hungry = 100
//     constructor(gender, age) {
//         this.gender = gender;
//         this.age = age;    
//     }

//     eat(food) {
//         if ( this.hungry + food > 100) {
//            return;
//         }
//         this.hurry += food
//     }

//     talk() {
//         console.log('');
//     }
// }

// class Cat extends Animal{
//     talk() { 
//         console.log("Meow"); 
//     } 
        
// }

// class Dog extends Animal{
//     talk() { 
//         console.log("Gou"); 
//     } 

// }

// let myCat = new Cat("male", 25)
// let myDog = new Dog("female", 30)

// myCat.talk()
// myDog.talk()


// function bt2(){
    
// class Rat {
//     constructor(name, weight, speed) {
//         this.name = name;
//         this.weight = weight;
//         this.speed = speed;
//         this.isAlive = true;
//     }
    
//     makeSound() {
//         console.log("Chít chít");
//     }
// }
  
// class Cat {
//     constructor(name, weight, maxSpeed) {
//         this.name = name;
//         this.weight = weight;
//         this.maxSpeed = maxSpeed;
//     }
  
//     makeSound() {
//         console.log("Meo meo");
//     }

//     catchRat(rat) {
//         if (this.maxSpeed > rat.speed) {
//             result1.innerHTML  = this.name + ' đã bắt được ' + rat.name + '.';
//             rat.isAlive = false;

//         } else {
//             result1.innerHTML  = rat.name +  ' đã thoát khỏi ' + this.name + '.';
//         }   
//     }   
    
//     eatTheMouse(rat) {
//         if (rat.isAlive === false) {
//             this.weight += rat.weight
//             result2.innerHTML = this.name + ' đã ăn được ' + rat.name + ' và mập lên thành ' + this.weight + ' kg. '
//         }   
//     }
// }

// let result1 = document.getElementById('kq2_1')
// let result2 = document.getElementById('kq2_2')
// let myRat = new Rat("Jerry", 1, 3);
// let myCat = new Cat("Tom", 5, 10);

// // myRat.makeSound()
// // myCat.makeSound()
// myCat.catchRat(myRat)
// myCat.eatTheMouse(myRat)

// return 'Kết quả :'
// }
