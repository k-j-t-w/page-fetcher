let args = process.argv.slice(2);
console.log(args[0], args[1]);

const fs = require('fs');
const request = require("request");

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, (error) => {
    const bytes = body.length
    
    if(error) {
      return console.log(error);
    }
    console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`);
  });
} )