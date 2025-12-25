const fs = require("fs").promises;

async function readDataAsync() {
    const data = await fs.readFile("students.json", "utf-8");
    return JSON.parse(data);
}

async function test() {
    try {
        const students = await readDataAsync();
    } catch (e) {
        console.log("Error");
        return;
    } 

    console.log(students);
}

test();
