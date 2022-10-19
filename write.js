const fs = require('fs');

const write =function(){
    fs.writeFileSync('note.txt', "hello world");

}
module.exports = write;