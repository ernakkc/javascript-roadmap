const express = require('express');
const {readDataAsync, writeDataAsync} = require('./data')

const app = express();
const PORT = 3000;
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});

// Check server
app.get("/", (req, res) => {
    res.status(200).json({
        "success":true, 
        "message": "Server is working !"
    });
})

// Get students list
app.get("/students", async (req, res) => {
    const students = await readDataAsync();
    if (students.success) {
        res.status(200).json(students.data);
    } else {
        res.status(500).json(students.error);
    }
})

// get students by id
app.get("/students/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        res.status(400).json({
            "success": false,
            "message": "Wrong requests type"
        })
        return;
    }

    var students = await readDataAsync();
    if (students.success) {
        students = students.data;
        
        const index = students.findIndex(s => s.id === id)
        if (index != -1) {
            res.status(200).json({
                        "success": true,
                        "data": students[index]
                    })
        } else {
            res.status(404).json({
                "success": false,
                "message": `There is not student by ${id} ID.`
            })
        }
    } else {
        res.status(500).json(students.error);
    }
})

// add a new student
app.post("/students", async (req, res) => {
    const name = req.body.name;
    const score = Number(req.body.score);

    if (name === "" || Number.isNaN(score) || score > 100 || score < 0){
        res.status(400).json({
            "success": false,
            "message": "Invalid data type."
        })
        return;
    } 

    const students = await readDataAsync();
    
    if (!students.success) {
        res.status(500).json(students.error);
        return;
    }

    const result = students.data;
    const newID = result.length > 0 ? result[result.length - 1].id + 1 : 1;
    result.push({ "id": newID, "name": name, "score": score });
    const {success: writeSuccess, data: writeResult} = await writeDataAsync(result);
    
    if (!writeSuccess) {
        res.status(500).json(writeResult);
        return;
    }

    res.status(200).json(writeResult);
})



// change student score by id 
app.put("/students/:id", async (req, res) => {
    const id = Number(req.params.id);
    const score = Number(req.body.score);

    if (Number.isNaN(id) || Number.isNaN(score) || score > 100 || score < 0) {
        res.status(400).json({
            "success": false,
            "message": "Invalid data type."
        })
        return;
    }

    const students = await readDataAsync();

    if (!students.success) {
        res.status(500).json({
            "success": false,
            "message": students.error
        })
        return;
    }

    const data = students.data;

    const index = data.findIndex(s => s.id === id);
    console.log(index)

    // DEVAM EDİLECEK




})

// delete a student by id
app.delete("/students/:id", (req, res) => {

})
