const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Hello node.js'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title == title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title == title;
    // })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesAfterRemoval = notes.filter((note) => note.title !== title)

    if (notes.length == notesAfterRemoval) {
        console.log(chalk.red('No note found with Title: ' + title))
    } else {
        saveNotes(notesAfterRemoval)
        console.log(chalk.green('Note Removed!'))
    }
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJson = databuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note)=>{
console.log(note.title)
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
