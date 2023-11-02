import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/noteService'

const App = () => {
  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    noteService.read().then((notes) => {
      setNotes(notes)
    })
  }, [])

  const createNote = (event) => {
    event.preventDefault()

    noteService
      .create({
        id: notes.length + 1,
        text,
        important: Math.random() > 0.5,
      })
      .then((createdNote) => {
        setNotes(notes.concat(createdNote))
        setText('')
      })
  }

  const toggleNoteImportance = (id) => {
    const note = notes.find((note) => note.id === id)
    noteService
      .update(id, {
        ...note,
        important: !note.important,
      })
      .then((updatedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)))
      })
      .catch((_) => {
        alert(`"${note.text}" has been deleted from the server`)
        setNotes(notes.filter((note) => note.id !== id))
      })
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleNoteImportance={() => toggleNoteImportance(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={createNote}>
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
