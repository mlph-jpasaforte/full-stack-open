const Note = ({ note, toggleNoteImportance }) => (
  <li>
    {note.text}
    <button onClick={toggleNoteImportance}>
      mark as {note.important ? 'not' : ''} important
    </button>
  </li>
)

export default Note
