function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    var a = +prompt('Nhập số a');
    var b = +prompt('Nhập số b');

    if(a%b == 0){
        return 'True';
    }
    else{
        return 'False';
    }
}

function bt2(){
    var age = +prompt('Nhập tuổi');

    if(age>15){
        return 'Đủ điều kiện học lớp 10';
    }
    else{
        return 'Chưa đủ điều kiện học lớp 10';
    }
}

function bt3(){
    var num = +prompt('Nhap so nguyen');

    if(num>0){
        return 'Số ' + num + ' lớn hơn 0';
    }
    else{
        return 'Số ' + num + ' nhỏ hơn 0';
    }
}

function bt4(){
    var a = +prompt('Nhập số a');
    var b = +prompt('Nhập số b');
    var c = +prompt('Nhập số c');
    
    if(a > b && a > c){
        return ('a là số lớn nhất');
    }
        else if(b > c){
            return ('b là số lớn nhất');
        }
        else{
            return ('c là số lớn nhất');
        }
}

function bt5(){
    function xeploai(dtb){
    
    if(dtb >=8){
        return `Học sinh giỏi với điểm trung bình = ${dtb}`;
    }
        else if(dtb >6){
            return `Học sinh khá với điểm trung bình = ${dtb}`
        }
        else{
            return `Học sinh trung bình với điểm trung bình = ${dtb}`;
        }
    }
        var a = +prompt('Điểm kiểm tra');
        var b = +prompt('Điểm thi giữa kỳ');
        var c = +prompt('Điểm thi cuối kỳ');
        
        var dtb = (a+b*2+c*3)/6;
        return (xeploai(dtb));
}

function bt6(){
    var doanhso = +prompt('Doanh số bán hàng $');
    var hoahong = 0;
    
    if(doanhso > 9999){
        hoahong = doanhso * 0.3;
        return ('Hoa hồng : ' + hoahong + ' $');
    }
        else if (doanhso > 1000 && doanhso < 9999){
        hoahong = doanhso * 0.2;  
        return ('Hoa hồng : ' + hoahong + ' $'); 
        }
        else{
        hoahong = doanhso * 0.1;
        return ('Hoa hồng : ' + hoahong + ' $');  
        }
}

function bt7(){
    function cuocDienThoai(x){
        if (giaCuocGoi >= 0 && soCuocGoi >= 0 && soPhutTb >= 0 && giaTinNhan >= 0 && soTinNhan >= 0)
            return `Cước điện thoại trong tháng = ${x} VND`;
            else{
                return `Cước điện thoại không hợp lệ`;
            }
    }

    var giaCuocGoi = +prompt('Giá một cuộc gọi/1p (VND)');
    var soCuocGoi = +prompt('Số cuộc gọi');
    var soPhutTb = +prompt('Số phút trung bình');
    var giaTinNhan = +prompt('Giá một tin nhắn (VND)');
    var soTinNhan = +prompt('Số tin nhắn');
    
    var a = giaCuocGoi * soCuocGoi * soPhutTb;
    var b = giaTinNhan * soTinNhan;
    var x = a * b;
    let formatx = x.toLocaleString('vi-VN')
    return (cuocDienThoai(formatx));
}



