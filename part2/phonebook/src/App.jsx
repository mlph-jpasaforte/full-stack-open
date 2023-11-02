import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456',
      id: 1,
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523',
      id: 2,
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345',
      id: 3,
    },
    {
      name: 'Mary Poppendieck',
      number: '39-23-6423122',
      id: 4,
    },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const filtered = persons.filter((person) => person.name === name)
    if (filtered.length !== 0) {
      alert(`${name} is already added to the phonebook`)
    } else {
      setPersons(
        persons.concat({
          name,
          number,
          id: persons.length + 1,
        })
      )
      setName('')
      setNumber('')
    }
  }

  const handleSearchTermChange = (event) => {
    const searchQuery = event.target.value
    setSearchTerm(searchQuery)
    if (searchQuery) {
      setPersons(
        persons.filter((person) =>
          person.name.toLowerCase().includes(searchQuery)
        )
      )
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <h3>add a new</h3>
      <Form
        handleSubmit={handleSubmit}
        name={name}
        handleNameChange={handleNameChange}
        number={number}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  )
}

export default App
