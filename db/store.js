const util = require('util');

//This package will be used to generate a unique id
const uuidv1 = require('uuid')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);





//create our class
class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    //creat a function to get notes

    //create a function to add notes

    //create a function to remove notes BY ID -- YOU CANNOT DO THIS WITHOUT GETTING UUID TO WORK





}

//export new store

module.exports = new Store();