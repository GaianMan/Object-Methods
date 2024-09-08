const evaluations = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 70
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 60
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",

        score: 60
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 40
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 45
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 35
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 3, // Unique identifier for each course

        courseName: "JS Level 1",
        score: 25
    }
];

//Return the evaluation record with the lowest evaluation score,
function lowestEvaluation(arr) {
    let lowest = arr.reduce((min, courseScore) => {
        if (courseScore.score < min.score) {
            min = courseScore;
        }
        return min;
    }, arr[0]);
    return lowest;
}
console.log("lowest evaluation score: " ,lowestEVStudent(evaluations));

//Return the name of the student who has the lowest evaluation score
function lowestEVStudent(arr){
    let stdName= lowestEvaluation(arr).studentName;
    return stdName;
}
console.log("lowest evaluated student name: " ,lowestEVStudent(evaluations));

//Return array of students that have any evaluation more than 60.
function isMore(arr){
    let stdArr=arr.filter(score=>score>=60)
    return stdArr;
}
console.log("Students that evaluated more than 60: " ,isMore(evaluations));

//Return an array of students for whom the average evaluation is less than 40
function averageEvaluation(arr){
    let averageArr= arr.reduce((av,score)=>score.score)
}


const studentScores = {};

evaluations.forEach(item => {
    if (!studentScores[item.studentId]) {
        studentScores[item.studentId] = { totalScore: 0, count: 0, studentName: item.studentName };
    }
    studentScores[item.studentId].totalScore += item.score;
    studentScores[item.studentId].count += 1;
});

const studentsWithLowAverage = Object.values(studentScores)
    .filter(item => (item.totalScore / item.count) < 40)
    .map(item => item.studentName);

console.log(studentsWithLowAverage);