const express = require("express");
const fs = require("fs");

const FILE = "students.json";

function readData() {
    const data = fs.readFileSync(FILE, "utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server çalışıyor 🚀");
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});

app.get("/students" , (req,res) => {
    const students = readData();
    res.json(students);
})

app.post("/students" , (req,res) => {
    const name = req.body.name;
    const score = req.body.score;

    if (score < 0 || score > 100 || name == ""){
        res.send("Geçersiz veri");
        return
    }
    
    const students = readData();
    var id = 1;
    if (students.length != 0) {
        id = students[students.length-1].id +1;
    }

    students.push({id, name, score})
    writeData(students);

    res.send({"complated":{id, name, score}});
})

app.put("/students/:id" , (req,res) => {
    const id = Number(req.params.id);
    const newScore = Number(req.body.score);

    if (newScore < 0 || newScore > 100 || Number.isNaN(newScore) || id < 1 || Number.isNaN(id)) {
        res.status(400).json({"ERROR":"Invalid Values"});

        return;
    }

    const students = readData();
    const index = students.findIndex(s => s.id == id);

    if (index == -1) {
        res.status(404).json({"ERROR": `${id} ID'li öğrenci bulunmamaktadır.`});
        return;
    }

    const oldScore = students[index].score;

    if (oldScore == newScore) {
        res.status(400).json({"INFO":"Öğrencinin notu anyı !"});
        return;
    } 

    students[index].score = newScore;
    writeData(students);

    res.status(200).json({"id":id, "oldScore": oldScore, "newScore": newScore})
})