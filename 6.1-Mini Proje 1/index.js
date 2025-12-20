const students = [];

function calculateGrade(score) {
    if (score >= 90) return "AA";
    if (score >= 80) return "BA";
    if (score >= 70) return "BB";
    if (score >= 60) return "CB";
    return "FF";
}

function addStudent(name, score) {
    if (score < 0 || score > 100) {
    console.log(`${name} için geçersiz not: ${score}`);
    return;
  }

    students.push({ name, score });
}

function listStudents() {
    students.forEach(s => {
        console.log(`${s.name} - ${s.score} → ${calculateGrade(s.score)}`);
    });
}


addStudent("Ali", 90);
addStudent("Ayşe", 75);
addStudent("Mehmet", 60);
addStudent("Eren", 120);


listStudents();
