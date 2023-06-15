const axios = require('axios');

axios.get('http://localhost:3000/students/1')
    .then(res1 => {
        const student1 = res1.data.score;
        console.log('Điểm hs1', student1);

        axios.get('http://localhost:3000/students/2')
            .then((res2) => {
                const student2 = res2.data.score;
                console.log('Điểm hs2', student2);

                axios.get('http://localhost:3000/students/3')
                    .then((res3) => {
                        const student3 = res3.data.score;
                        console.log('Điểm hs3', student3);

                        const students = [student1, student2, student3];
                        console.log(students);
                        const maxScore = Math.max(...students);
                        console.log(maxScore);
                    })
            })
    })
   

