function run(tenbt){ 
    let data = eval(tenbt + '()'); 
    let result = document.getElementById(tenbt);
     
    result.innerHTML = data;
 }

function bt1(){

    var doC = +prompt('Nhập độ C');
    var doF; 

    if(doC < 0){
        return ('Nhiệt độ hợp lệ là');
    }
    else{
    doF = doC * 1.5 + 32;
    return ('Nhiệt độ F là : ' + doF);
}

}

function bt2(){
    ft =m * 3.2808

    var m = +prompt('Nhập số mét');
    var ft;

    if(m < 0){
        return ('Số mét không hợp lệ');
    }
    else{
        ft = m * 3.2808;
        return ('Số ft là : ' + ft);
    }
}

function bt3(){
    var a = +prompt('Nhập cạnh a');
    var S;

    if( a < 0 ){
        return ('Số cạnh khoogn hợp lệ');
    }
    else{
        S = a*a;
        return ('Diện tích hình vuông = ' + S);
    }
}

function bt4(){
    var a = +prompt('Nhập chiều dài');
    var b = +prompt('Nhập chiều rộng');
    var S;

    if (a > 0 && b > 0){
        S = a * b;
        return ('Diện tích hình chữ nhật là : ' + S);
    }
        else if (b < 0 & a > 0){
        return ('Chiều rộng không hợp lệ');
        }
        else if (a < 0 & b > 0){
            return ('Chiều dài không hợp lệ');
        }
        else{
            return ('Chiều dài và chiều rộng không hợp lệ');
        }   
}

function bt5(){
   
}

function bt6(){
    var a = +prompt('Nhập a');
    var b = +prompt('Nhập b'); 

    function giaiPTBac1(a,b){
        if(a === 0)
        {
          if (b === 0)
            {
            return 'Phương trình có vô số nghiệm';
            }
            else 
            {
            return 'Phương tình vô nghiệm';
            }
        }
        else {
            var x = -b/a;
            return 'Nghiệm của phương trình là x = ' + x;
        }
    }
    
    return (giaiPTBac1(a, b));
}

function bt7(){
    var a = +prompt('Nhập a');
    var b = +prompt('Nhập b'); 
    var c = +prompt('Nhập c');

    function giaiPTBac2(a, b, c) {
        let delta = b * b - 4 * a * c;
      
        if (delta < 0) {
          return "Phương trình vô nghiệm";
        } else if (delta == 0) {
          let x = -b / (2 * a);
          return `Phương trình có nghiệm kép x = ${x}`;
        } else {
          let x1 = (-b + Math.sqrt(delta)) / (2 * a);
          let x2 = (-b - Math.sqrt(delta)) / (2 * a);
          return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
        }
      }

    return (giaiPTBac2(a, b, c));
}

function bt8(){
    function age(a){
        if (0 < a < 120){
            return `Tuổi của người đó là ${a}`;
        }
        else{
            return 'Tuổi không hợp lệ';
        }
    }
    
    var a = +prompt('Nhập tuổi');
    return (age(a));

}

function bt9(){
    function canh(a,b,c){
        if (a > 0 && b > 0 && c > 0) {
            if (a + b > c && b + c > a && a + c > b) {
              if (a === b && b === c) {
                return `Đây là một tam giác đều với ba cạnh ${a}, ${b}, ${c}`;
              } else {
                return `Đây là một tam giác với ba cạnh ${a}, ${b}, ${c}`;
              }
            } else {
              return ("Đây không phải là cạnh của một tam giác");
            }
          } else {
            return ("Các giá trị cạnh phải lớn hơn 0");
          }
    }

    var a = +prompt('Nhập cạnh a');
    var b = +prompt('Nhập cạnh b');
    var c = +prompt('Nhập cạnh c');
    return (canh(a,b,c));
}

function bt10(){
        let donGia1 = 1.549;
        let donGia2 = 1.858;
        let donGia3 = 2.34;
        let donGia4 = 2.615;
        var tongSoKwh = +prompt('Nhập tổng số Kwh');
        
        if (tongSoKwh <= 150) {
            giaDien = tongSoKwh * donGia1;
            return `Giá điện = ${giaDien.toLocaleString('vi-VN')} VND`;
        } 
        else if (tongSoKwh <= 400) {
            giaDien = 150 * donGia1 + (tongSoKwh - 150) * donGia2;
             return `Giá điện = ${giaDien.toLocaleString('vi-VN')} VND`;
        } 
        else if (tongSoKwh <= 700) {
            giaDien = 150 * donGia1 + 250 * donGia2 + (tongSoKwh - 400) * donGia3;
             return `Giá điện = ${giaDien.toLocaleString('vi-VN')} VND`;
        } 
        else {
            giaDien = 150 * donGia1 + 250 * donGia2 + 300 * donGia3 + (tongSoKwh - 700) * donGia4;
             return `Giá điện = ${giaDien.toLocaleString('vi-VN')} VND`;
        }  
}
    
function bt11(){
    function tinhThueThuNhapCaNhan(thuNhap) {
        if (thuNhap > 80000000) {
            thueThuNhap = thuNhap * 0.35 - 9.85;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
        else if (thuNhap > 52000000){
            thueThuNhap = thuNhap * 0.30 - 5.85;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
        else if (thuNhap > 32000000){
            thueThuNhap = thuNhap * 0.25 - 3.25;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
        else if (thuNhap > 18000000){
            thueThuNhap = thuNhap * 0.20 - 1.65;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
        else if (thuNhap > 10000000){
            thueThuNhap = thuNhap * 0.15 - 0.75;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
        else if (thuNhap > 5000000){
            thueThuNhap = thuNhap * 0.10 - 0.25;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
        else {
            thueThuNhap = thuNhap * 0.05;
            return `Thuế TNCN phải đóng là ${thueThuNhap.toLocaleString('vi-VN')} VND`;
        }
    }
    var thuNhap = +prompt('Nhập TNCN');
    return (tinhThueThuNhapCaNhan(thuNhap));    
}

function bt12(){
    var soTienGoc = +prompt('Nhập số tiền gốc');
    var laiSuatHangNam = +prompt('Nhập lãi suất hằng năm');
    var soThang = 12;
    var soNam = +prompt('Nhập số năm')

    function tinhLaiKep(soTienGoc, laiSuatHangNam, soThang, soNam){

       if (soTienGoc > 0 && laiSuatHangNam > 0 && soThang > 0 && soThang > 0){
            let laiSuatHangNamchanged = Math.round(laiSuatHangNam / 100);
            let tongSoThang = soThang * soNam;
            let tonglai = Math.round(soTienGoc * (1+laiSuatHangNamchanged) ** tongSoThang);
            return ('Tổng lãi suất là ' + tonglai + ' VND');      
       }
    
       else {
        return `Lãi suất không hợp lệ`;
       }
    }       
    
      return (tinhLaiKep(soTienGoc, laiSuatHangNam, soThang, soNam));    
}

function bt13(){
    let canNang = document.getElementById("canNang").value;
    let chieuCao = document.getElementById("chieuCao").value;
    let bmi = canNang / ( Math.pow(chieuCao , 2) );
    let formatbmi = bmi.toLocaleString('vi-VN')

    if (bmi >= 30){
        result = 'Bạn béo phì'
    }
    else if (bmi >= 25){
        result = 'Bạn thừa cân'
    }
    else if (bmi >= 18.5){
        result = 'Bạn cân đối'
    }
    else{
        result = 'Bạn thiếu cân'
    }
    document.getElementById("ketqua").innerHTML = "Chỉ số BMI của bạn là: " + formatbmi + ". " + result;
}

function btSwitch(){
    let number = +prompt('Nhập số"');

    switch (Math.sign(number)) {
    case -1:
        result = ("Số " + number + " là số âm");
        break;   
    case 0:
        result = ("Số " + number + " là số không");
        break;
    case 1:
        result = ("Số " + number + " là số dương");
        break;
    }
    document.getElementById("ketquaSwitch").innerHTML = result;
}