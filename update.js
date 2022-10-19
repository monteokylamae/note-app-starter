const fs = require('fs')
const update = function(note, oldNote){
    const oldNote = JSON.parse(oldNote)
    const newNote = oldNote.map(function(n, idx){
        if(n.id = note.id){
            n.title = note.id
            n.body = note.body
            return n
        }
    })
}
module.exports = update