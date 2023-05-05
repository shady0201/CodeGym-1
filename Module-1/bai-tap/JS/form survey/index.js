var selectedElement = document.getElementById("myage");
selectedElement.addEventListener("change",changeFunction);

function changeFunction(){
    var selectedValue = document.getElementById("myage").value;
    alert(selectedValue);

}

// var demo = document.getElementById("demo");
// demo.addEventListener("mouseover",mouseover);    
// demo.addEventListener("mouseout",mouseout);

function mouseover(){
    document.getElementById("demo").style.color = "red";
}

function mouseout(){
    document.getElementById("demo").style.color = "black";
}

function do_something(){
    alert("Phạm vi thu nhập hàng năm của bạn là gì?");
}