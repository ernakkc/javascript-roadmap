const fs = require("fs");

const FILE_PATH = "./6.2- Mini Proje 2/students.json";

// JSON oku
function readStudents() {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

// JSON yaz
function writeStudents(students) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(students, null, 2));
}

function calculateGrade(score) {
  if (score >= 90) return "AA";
  if (score >= 80) return "BA";
  if (score >= 70) return "BB";
  if (score >= 60) return "CB";
  return "FF";
}

function addStudent(name, score) {
  if (!name || score < 0 || score > 100 || isNaN(score)) {
    console.log("Geçersiz veri");
    return;
  }

  const students = readStudents();

  students.push({ name, score });

  writeStudents(students);

  console.log(`${name} eklendi`);
}

function listStudents() {
  const students = readStudents();

  if (students.length === 0) {
    console.log("Öğrenci yok");
    return;
  }

  students.forEach(s => {
    console.log(`${s.name} - ${s.score} → ${calculateGrade(s.score)}`);
  });
}

// CLI
const command = process.argv[2];
const name = process.argv[3];
const score = Number(process.argv[4]);

if (command === "add") {
  addStudent(name, score);
} else if (command === "list") {
  listStudents();
} else {
  console.log("Komutlar:");
  console.log("add <isim> <not>");
  console.log("list");
}
