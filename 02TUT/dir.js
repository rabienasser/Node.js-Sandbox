const fs = require("fs");

// If this directory does not exist (new), create it
if (!fs.existsSync("./new")) {
   fs.mkdir("./new", (err) => {
      if (err) throw err;
      console.log("Directory Created");
   });
}

// Delete directory if it exists
if (fs.existsSync("./new")) {
   fs.rmdir("./new", (err) => {
      if (err) throw err;
      console.log("Directory Removed");
   });
}
