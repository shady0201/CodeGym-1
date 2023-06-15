const axios = require('axios');

axios.get('http://localhost:3000/students/1')
    .then(response => {
        const student1 = response.data.score;
        console.log('Điểm hs1', student1);

        axios.get('http://localhost:3000/students/2')
            .then((res2) => {
                const student2 = res2.data.score;
                console.log('Điểm hs2', student2);

                axios.get('http://localhost:3000/students/3')
                    .then((res3) => {
                        const student3 = res3.data.score;
                        console.log('Điểm hs3', student3);

                            axios.get('http://localhost:3000/students/4')
                            .then((res4) => {
                                const student4 = res4.data.score;
                                console.log('Điểm hs4', student4);

                                const students = [student1, student2, student3, student4];
                                console.log(students);

                                const filteredScore = students.filter(score => score > 5)
                                console.log('Số sinh viên có điểm lớn hơn 5 là', filteredScore.length);
                            })
                    })
            })
    })


