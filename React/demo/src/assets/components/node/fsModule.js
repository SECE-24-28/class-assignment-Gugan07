const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "demo");

const folderExist = fs.mkdirSync(folderPath);
if(!folderExist){
fs.mkdirSync(folderPath);
}else{
    console.log("folder already exists");
}
fs.writeFileSync(folderPath,"This is a new File");

fs.appendFileSync(folderPath," \n This is appended text");

const res = fs.readFileSync(folderPath, "utf-8");
console.log(res);

fs.renameSync(fileURLToPath,"demo/rename.txt");

fs.unlinkSync(renamedPth);