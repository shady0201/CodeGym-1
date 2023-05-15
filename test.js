// function f() {
//    if ( true ) {
//       var a = 10;
//       let b = 10;
//       const c = 10;
//    }
//       console.log(a); // ko loi
//       console.log(b); // loi
//       console.log(c); // loi
// }

// f();
// console.log(a); // loi
// console.log(b); // loi  
// console.log(c); // loi  

// let arr = [1,2,3,4];
// let sum = 0
// arr.map(item => {
//    sum += item;
// })
// console.log(sum);

const numbers = [1, 2, 3, 4, 5, 6, 10, 50, 17, 22];
const oddNumbers = numbers.filter(num => num % 5 === 2 && num > 2);
console.log(oddNumbers); 