var courses = [
    {
        id : 1,
        name : 'Javascript',
        coin : 100
    },

    {
        id : 2,
        name : 'HTML, CSS',
        coin : 200
    },

    {
        id : 3,
        name : 'Ruby',
        coin : 220
    },
]

// var totalCoin = 0
// for ( let i = 0; i < courses.length; i++) {
//     let { id, name, coin } = courses[i];
//     totalCoin += coin;
// }
// console.log(totalCoin);

// var totalCoin = 0
// for ( var i of courses) {
//     totalCoin += i.coin;
// }
// console.log(totalCoin);

// var i = 0;

// function coinHandler(accumulator, currentValue) {
//     i++;

//     var total = accumulator + currentValue.coin;

//     console.table({
//         'Lượt chạy: ': i, 
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ' : total
//     });
//     return total;
// }

// var totalCoin = courses.reduce(coinHandler, 0);

// console.log(totalCoin);

var totalCoin = courses.reduce((accumulator, currentValue) => accumulator + currentValue.coin, 0 )
console.log(totalCoin); 