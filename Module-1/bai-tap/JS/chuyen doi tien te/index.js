function clickConvert(){
    let input = document.getElementById("input-money");
    let money = input.value;
    if(!money || money.lenght <= 0){
        alert("Số tiền nhập vào không đúng định dạng");
        return;
    }
    let SCALE_USD = 23500;
    let result = money * SCALE_USD;
    // result = Number((result).toFixed(1)).toLocaleString();
    alert("Kết quả: "+ result + " VNĐ");
}