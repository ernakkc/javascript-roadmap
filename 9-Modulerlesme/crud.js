const {readData, writeData} = require("./data");


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
        ID = students[students.length -1].id + 1;
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

module.exports = {addStudent, listStudents, deleteStudent, updateStudent, searchStudent};