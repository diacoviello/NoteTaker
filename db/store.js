const util = require("util");
const fs = require("fs");

//This package will be used to generate a unique id
const uuidv1 = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//create our class
class Store {
  read() { 
    console.log("checking ...");
    return readFileAsync(path.join(__dirname, "db.json"), "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  //creat a function to get notes
  async getNotes() {
    const noteList = JSON.parse(await this.read());
    console.log(noteList);
    return noteList;
  }
  //create a function to add notes
  writeNotes(note) {
    let noteList = JSON.parse(read());
    noteList.push(note);
    this.write(noteList);
    console.log(noteList);
  }
  //create a function to remove notes BY ID -- YOU CANNOT DO THIS WITHOUT GETTING UUID TO WORK
  deleteNotes() {}
}

//export new store

module.exports = new Store();
