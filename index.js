const express = require('express')
const app = express()

app.use(express.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.0982",
        important: true
    },
    {
        id: 2,
        content: "Browser can Execute on JavaScript",
        date: "2022-05-30T18:30:34.0982",
        important: false
    },
     {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:30:34.0982",
        important: true
    }
]

app.get('/', (request, respose) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/notes/:id', (request, response) => {
    // get a specific note using the id
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    // only send a note if it exists
    if (note){
        response.json(note)
    }else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id != id)

    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    const note = request.body
    console.log(note)
    response.json(note)
})

const PORT = 3001
app.listen(PORT)
console.log(`Sever running on port ${PORT}`);