// const fs = require('fs');
// const filepath = 'text.txt';

// console.log("Start");

// fs.readFile(filepath, {encoding: 'utf8'}, (err, data) => {
//     console.log(data);
// });

// console.log("End");

// axios = require('axios');
// let data = []; // A
// function getJSONAPI() {
//     return new Promise(function (resolve) {
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//             .then(function (json) {
//                 resolve(json.data);
//             });
//     });
// }

// getJSONAPI().then(result => { // B
//     data = result;
//     let newData = data.filter(item => item.id > 97)
//     console.log(newData) //C
//     for (const value of newData) {
//         console.log(value.id);
//     }
// })

let axios = require('axios');
// axios.get('http://localhost:3000/students')
//     .then((x) => {
//         let data = x.data
//         console.table(data);
//         let scoreHigherThanSix = data.filter(item => item.score > 6)
//         console.log(scoreHigherThanSix);
//     });

axios.get('http://localhost:3000/students/1')
    .then((x) => {
        let student = x.data
        console.log(student);x  
    });

axios.get('http://localhost:3000/students/2')
    .then((x) => {
        let student = x.data
        console.log(student);
    });


