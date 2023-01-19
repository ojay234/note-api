const fs = require("fs");

//const bookJSON = JSON.stringify(book);
//const parseData = JSON.parse(bookJSON)
//fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
