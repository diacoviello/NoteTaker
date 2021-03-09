const util = require("util");
const fs = require("fs");
const path = require("path");

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
  getNotes() {
    return this.read().then((notes) => {
      const noteList = JSON.parse(notes);
      console.log(noteList);
      return noteList;
    });
  }
  //create a function to add notes
  writeNotes(note) {
    return this.read()
      .then((notes) => {
        let noteList = JSON.parse(notes);
        noteList.push(note);
        this.write(noteList);
        console.log(note);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //create a function to remove notes BY ID -- YOU CANNOT DO THIS WITHOUT GETTING UUID TO WORK
  deleteNotes() {

  }
}

//export new store

module.exports = new Store();
