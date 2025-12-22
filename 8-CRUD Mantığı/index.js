const fs = require('fs');


const FILE = './8-CRUD Mantığı/students.json';

function readData() {
    const data = fs.readFileSync(FILE,"utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}



//    *******- CRUD -*******
function addStudent(name, score) {
    if (score < 0 || score > 100 || name == ""){
        console.log("Geçersiz veri");
        return
    }

    const students = readData();
    var ID = 1;

    if (students.length == 0) {
        ID = 1;
    } else {
        ID = students[students.length -1].ID + 1;
    }

    students.push({ID, name, score});
    writeData(students);

    console.log(`${ID} ID'li öğrenci başarıyla kaydedildi.`);
}

function listStudents() {
    const students = readData();
    
    if (students.length == 0) {
        console.log("Sistemde kayıtlı öğrenci bulunmamaktadır.");
        return;
    } 

    console.log("--ÖĞRENCİLER--");
    students.forEach(s => {
        console.log(`${s.ID} | ${s.name} | ${s.score}`);
    });
}

function deleteStudent(ID) {
    try {
        ID = Number(ID);
    } catch {
        console.log("Geçerli bir numara giriniz !");
        return;
    }

    const students = readData();
    const index = students.findIndex(s => s.ID == ID);

    if (index == -1) {
        console.log(`${ID} ID'li öğrenci bulunmamaktadır.`);
        return;
    }

    students.splice(index , 1);
    writeData(students);

    console.log(`${ID} ID'li öğrenci silindi.`);
}

function updateStudent(ID, newScore) {
    if (newScore < 0 || newScore > 100 || ID < 1) {
        console.log("Girilen bilgileri kontrol edin !");
        return;
    }

    try {
        newScore = Number(newScore);
    } catch {
        console.log("Scoru yanlış girdiniz !");
        return;
    }

    const students = readData();
    const index = students.findIndex(s => s.ID == ID);

    if (index == -1) {
        console.log(`${ID} ID'li öğrenci bulunmamaktadır.`);
        return;
    }

    const oldScore = students[index].score;

    if (oldScore == newScore) {
        console.log("Öğrencinin notu anyı !");
        return;
    } 

    students[index].score = newScore;
    writeData(students);

    console.log(`${ID} ID'li öğrencinin notu ${newScore} olarak güncellendi.`);
}

function searchStudent(text) {
    if (text == "") {
        console.log("Metin giriniz !");
        return;
    }

    const students = readData();

    const index = students.findIndex(s => s.name.toLowerCase().includes(text.toLowerCase()));

    if (index == -1) {
        console.log(`Öğrenci bulunmamaktadır.`);
        return;
    }

    const s = students[index]
    console.log(`Öğrenci bulundu !\n${s.ID} | ${s.name} | ${s.score}`)
}


const command = process.argv[2];
const name_or_id = process.argv[3];
const score = process.argv[4];

if (command == "add") {
    addStudent(name_or_id, score);
} else if (command == "delete"){
    deleteStudent(name_or_id);
} else if (command == "list"){
    listStudents();
} else if (command == "update") {
    updateStudent(name_or_id, score);
} else if (command == "search") {
    searchStudent(name_or_id);
}else{
    console.log("KOMUTLAR");
    console.log("- add <name> <score>");
    console.log("- delete <ID>");
    console.log("- search <text>");
    console.log("- list");
}




