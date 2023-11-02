import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
    })
  }, [])

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
