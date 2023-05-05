function changeMoney(){
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    const rate = 23400;
    let Result;

if (From == "VND" && To == "USD"){
    Result = "Kết quả : " + (Amount / rate) + " $";
}

else if (From == "USD" && To == "VND"){
    Result = "Kết quả : " + (Amount * rate) + " VND";
}

else if (From == "USD"){
        Result = "Kết quả : " + Amount + " $";
}   else{
        Result = "Kết quả : " + Amount + " VND";
}

document.getElementById("Result").innerHTML = Result;
} 


