const {addStudent, listStudents, deleteStudent, updateStudent, searchStudent} = require("./crud");




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




