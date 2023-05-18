var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
 
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []) // giá trị khởi tạo là 1 mảng rỗng trong lần gọi đầu tiên

// console.log(flatArray);

var topics = [
    {
        topic: 'Front-End',
        courses: [
            {
                id: 1,
                title: 'HTMl, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-End',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newCourses = topics.reduce(function(course, topic) {
    return course.concat(topic.courses);
}, [])
console.log(newCourses);

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
})
console.log(htmls.join(''));

var totalCount = 0;
topics.forEach(function(topic) {
    totalCount += topic.courses.reduce(function(count, course) {
        return count + course.id;
    }, 0)
});
console.log(totalCount);