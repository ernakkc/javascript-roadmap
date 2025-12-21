const fs = require("fs");

const FILE = "./7-File System & Persistence/students.json"



function readData() {
    const data = fs.readFileSync(FILE, "utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

function addStudent(name, score) {
    if (score < 0 | score > 100 | name == ""){
        console.log("Geçersiz veri");
        return
    }

    const students = readData();

    const last = lastStudent();

    var id;

    if (isListEmpty()) {
        id = 0;
    } else {
        console.log(last)
        id = last.id + 1;
    }
    students.push({id, name, score});

    writeData(students);

    console.log(`${name} başarıyla eklendi.`)
}

function deleteStudent(id) {
    const students = readData();
    const numericalId = Number(id)

    const index = students.findIndex(s => s.id == numericalId);

    if (index == -1) {
        console.log(`${numericalId}'li öğrenci bulunamadı`);
        return
    } 

    students.splice(index, 1);
    writeData(students);

    console.log(`${numericalId}'li öğrenci silindi`);
}

function isListEmpty(){
    const students = readData();

    if (students.length == 0) {
        return true
    } 
    return false
}

function lastStudent(){
    const students = readData();
    let last = {}
    students.forEach(s => {
        last = s;
    })
    return last
}

function listStudents() {
    const students = readData();

    if (students.length == 0) {
        console.log("Hiç öğrenci yok.")
        return
    }

    students.forEach(s => {
        console.log(`${s.id} - ${s.name} - ${s.score}`)
    });
}

const command = process.argv[2];
const name_or_id = process.argv[3];
const score = Number(process.argv[4]);

if (command === "add") {
  addStudent(name_or_id, score);
} else if (command === "list") {
  listStudents();
} else if (command == "delete"){
    deleteStudent(name_or_id);
}else {
  console.log("Komutlar:");
  console.log("add <isim> <not>");
  console.log("delete <id>")
  console.log("list");
}