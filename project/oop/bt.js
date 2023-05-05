

function run(tenbt){ 
    let data = eval(tenbt + '()'); 
    let result = document.getElementById(tenbt);
     
    result.innerHTML = data;
}

class ElectricLamp{
    constructor(status){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }
}

class SwitchButton{
    constructor(status, lamp){
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(ElectricLamp){
        return this.lamp = ElectricLamp;
    }

    switchOff(){
        this.lamp.status = false;
        return this.status = false;
    }

    switchOn(){
        this.lamp.status = true;
        return this.status = true;
    }
}

let electricLamp = new ElectricLamp(false)
let switchButton = new SwitchButton(false, electricLamp)

let lampButton = document.getElementById('lampButton')

let element1 = document.getElementById('html')
let element2 = document.getElementById('body')
let element3 = document.getElementById('bt')

lampButton.addEventListener('click', function() {

    if (!switchButton.status) {
        switchButton.switchOn();
        lampButton.innerHTML = 'Tắt đèn'
        element1.style.backgroundColor = "white"
        element2.style.backgroundColor = "white"
        element3.style.backgroundColor = "rgb(244, 233, 218)"
        document.getElementById('bt1').innerHTML = '<img src="../../assets/image/lampOn.jpg">' 
        console.log(electricLamp.getStatus());
    }

    else {
        switchButton.switchOff();
        lampButton.innerHTML = 'Bật đèn' 
        element1.style.backgroundColor = "black"
        element2.style.backgroundColor = "black"
        element3.style.backgroundColor = "black"
        document.getElementById('bt1').innerHTML = '<img src="../../assets/image/lampOff.jpg" width=266px; height=360px>' 
        console.log(electricLamp.getStatus())   
    }
});

function bt2(){
    
    class Animals {
        constructor(name, weight, speed) {
            this.name = name;
            this.weight = weight;
            this.speed = speed;
            this.isAlive = true;
        }
        
        makeSound() {
            console.log('');
        }
    }
      
    class Rat extends Animals {
        makeSound(){
            console.log('Chít chít');
        }
    }

    class Cat extends Animals {
        makeSound(){
            console.log('Meo meo');
        }

        catchRat(rat) {
            if (this.speed > rat.speed) {
                result1.innerHTML  = this.name + ' đã bắt được ' + rat.name + '.' + '<img src="../../assets/image/TomCatchJerry.jpg" width=350px; height=205px>'
                rat.isAlive = false;
    
            } else {
                result1.innerHTML  = rat.name +  ' đã thoát khỏi ' + this.name + '.';
            }   
        }   
        
        eatTheMouse(rat) {
            if (rat.isAlive === false) {
                this.weight += rat.weight
                result2.innerHTML = this.name + ' đã ăn ' + rat.name + ' và mập lên thành ' + this.weight + ' kg. ' + '<img src="../../assets/image/TomFat.jpg">'
            }   
        }
    }

    let result1 = document.getElementById('kq2_1')
    let result2 = document.getElementById('kq2_2')
    let myRat = new Rat("Jerry", 1, 4);
    let myCat = new Cat("Tom", 5, 10);
    
    myRat.makeSound()
    myCat.makeSound()
    myCat.catchRat(myRat)
    myCat.eatTheMouse(myRat)
    
    return 'Kết quả :'
}