const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/new-lorem.txt");

// One Way
// rs.on("data", (dataChunk) => {
//    ws.write(dataChunk);
// });

// Better Way
rs.pipe(ws);
