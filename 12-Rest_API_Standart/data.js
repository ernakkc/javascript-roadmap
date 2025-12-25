const fs = require('fs/promises');

const FILE = "./students.json";

async function readDataAsync() {
    try {
        const data = await fs.readFile(FILE, 'utf-8');
        const parsed = JSON.parse(data);
        return { success: true, data: parsed };
    } catch (e) {
        console.log(`Failed to read data from file ${FILE}`, e);
        console.log("Exception Occurred", e);
        const message = e instanceof Error ? e.message : String(e);
        return { success: false, error: message };
    }
}

async function writeDataAsync(data) {
    try {
        await fs.writeFile(FILE, JSON.stringify(data , null, 2));
        return { success: true , data: data};
    } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        return { success: false, error: message };
    }
}

module.exports = {readDataAsync, writeDataAsync};