const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "async")
const filePath = path.join(folderPath, "new.txt")

fs.mkdir(folderPath, (err) => {
    if (err) {
        console.log("Folder already exists");
    } else {
        console.log("Folder created successfully");
    }
    });

    fs.writeFile(filePath, "Hello, this is new file", (error) => {
        if(error) {
          console.error(error);
        } else {
            console.log(data);
        }
        fs.rename(filePath, "async/renamed.txt", (err) => {
            if (error) {
                console.error(err);
            }
        });

    });