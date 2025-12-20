const scores = [95, 82, 74, 61, 40];

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

for (let i = 0; i < scores.length; i++) {
    console.log(`${scores[i]} → ${calculateGrade(scores[i])}`)
}

scores.forEach(score => {
    console.log(`${score} → ${calculateGrade(score)}`);
})