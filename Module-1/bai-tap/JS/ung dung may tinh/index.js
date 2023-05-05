function cong(){
    let soMot = document.getElementById("soMot").value;
    let soHai = document.getElementById("soHai").value;
    let cong = +soMot + +soHai;
    //let result = (`<p>${soMot} + ${soHai} = ${cong}</p>`) ;
    let result = (soMot) + ' + ' + (soHai) + ' = ' + (cong);
    //document.write(`<h1>${result} : Tổng 2 số bằng ${result}</h1>`);
    document.getElementById("result").innerHTML = result;
}

function tru(){
        let soMot = document.getElementById("soMot").value;
        let soHai = document.getElementById("soHai").value;
        let tru = +soMot - +soHai;
        let result = (`<p>${soMot} - ${soHai} = ${tru}</p>`) ;
        document.getElementById("result").innerHTML = result;
}

function nhan(){
    let soMot = document.getElementById("soMot").value;
    let soHai = document.getElementById("soHai").value;
    let nhan = +soMot * +soHai;
    let result = (`<p>${soMot} * ${soHai} = ${nhan}</p>`) ;
    document.getElementById("result").innerHTML = result;
}

function chia(){
    let soMot = document.getElementById("soMot").value;
    let soHai = document.getElementById("soHai").value;
    let chia = +soMot / +soHai;
    let result = (`<p>${soMot} / ${soHai} = ${chia}</p>`) ;
    document.getElementById("result").innerHTML = result;
}

function mu(){
    let soMot = document.getElementById("soMot").value;
    let soHai = document.getElementById("soHai").value;
    let mu = soMot ** soHai;
    let squared = (`<p> ${soMot} ^ ${soHai} = ${mu}</p>`);
    document.getElementById("result").innerHTML = squared;
}


