const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Vraj Patel"
}

const {courseInstructor: ci} = course;
console.log(ci);

// {
//     "name": "Vraj Patel",
//     "course": "javascript",
//     "price": "999"
// }