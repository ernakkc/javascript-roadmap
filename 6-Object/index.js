const students = [
  { name: "Ali", score: 90 },
  { name: "Ayşe", score: 75 },
  { name: "Mehmet", score: 60 }
];

function calculateGrade(score) {
    if (score >= 90) {
        return "AA"
    } else if (score >= 80){
        return "BA"
    } else if (score >= 70) {
        return "BB"
    } else if (score >= 60) {
        return "CB"
    } else {
        return "FF"
    }
}

students.forEach(student => {
    console.log(`${student.name} - ${student.score} → ${calculateGrade(student.score)}`)
})