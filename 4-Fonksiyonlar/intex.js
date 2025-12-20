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

console.log(calculateGrade(85))