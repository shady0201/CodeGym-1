// function temperatureConverter(num){
//     let numBer = parseFloat(num);
//     document.getElementById("outputCelsius").innerHTML = (numBer-32) / 1.8;

// }

// function minArray(arr) {
//     if(arr.length == 0)
//         return -1;

//     let min = arr[0]
//     let index_min = [0];
    
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//             index_min = [i];
//         }
//         else if (min === arr[i]) {
//             index_min.push(i);
//         }
//     }
//     return index_min;
// }

// let arr1 = [-1, 12, 6, -1, 20, -1, 56, -1];
// // let arr2 = arr1.filter(x => x != -1)
// let min = minArray(arr1)
// console.log(min);

    function tbLeHam(arr){
       for ( let i = 0; i < arr.length; i++) {
        tong += arr[i]
       }
    return tong 
    }  
    let arr = document.getElementById('input14').value.split(',').map(Number);
    let tong = 0
    document.write(tbLeHam(arr))
