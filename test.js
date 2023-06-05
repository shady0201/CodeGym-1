// function changeMoney(money) {
//     let coins = [5000, 8000, 1000];
//     coins.sort((a, b) => b - a );
//     let result = [];
  
//     for (let i = 0; i < coins.length; i++) {
//       while (coins[i] <= money) {
//         result.push(coins[i]);
//         money -= coins[i];
//       }
//     }
  
//     if (money === 0) {
//       return result;
//     } else {
//       return "Không thể đổi số tiền này";
//     }
// }
  
// console.log(changeMoney(12000));
  
// let arr =  [8, 5, 1]
// let n = 10
// let count = 0

// for (let i = 0; i < arr.length; i++) {
//     count = Math.floor(n/arr[i])
//     n = n - Math.floor(n/arr[i])*arr[i]
//     console.log((arr));
// }

// console.log(count);

// function countOccurrences(arr) {
//     let markArray = new Array(arr.length).fill(false);
//     let result = {};
    
//     for (let i = 0; i < arr.length; i++) {
//       if (!markArray[i]) {
//         let count = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//           if (arr[j] === arr[i]) {
//             count++;
//             markArray[j] = true;
//           }
//         }
//         result[arr[i]] = count;
//       }
//     }
    
//     return result;
// }

// for ( let i = 1; i < 10; i++){
// 
//   console.log(i--)
//   if ( i-- == 0 ) {
  
//     break;
//   }
// }

// for (let i = 0; i < 1; i++){
//   for ( let j = 0; j < 5; j++){
//     for( let x = 0; x < 4; x++)
//       if ( x == 0){
//         console.log(1);
//         break;    
//     }
//   }
// }
