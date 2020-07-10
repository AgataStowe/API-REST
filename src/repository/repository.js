const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const moment = require('moment')

const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = {

// Set some defaults (required if your JSON file is empty)
db (){
    db.defaults({ rules: []})
    .write()
},

// Add a rule
create (rule){
   db.get('rules')
    .push(rule)
    .write()
}, 

// Remove a rule
remove (type){
    db.get('rules')
        .remove({ type: type})
        .write()
},

// List all the rules
list (){
    return db.get('rules').value()
}

}

