import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    personService.read().then((persons) => {
      setPersons(persons)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name || !number) {
      alert('All fields are required')
      return
    }

    const person = persons.find((person) => person.name === name)

    if (person) {
      if (
        window.confirm(
          `${name} has already been added to the phonebook. Would you like to update the existing number with a new one?`
        )
      ) {
        personService
          .update(person.id, {
            ...person,
            number,
          })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            )
            setName('')
            setNumber('')
          })
      }
    } else {
      personService
        .create({
          name,
          number,
        })
        .then((createdPerson) => {
          setPersons(persons.concat(createdPerson))
          setName('')
          setNumber('')
        })
    }
  }

  const deletePerson = ({ name, id }) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id)

      setPersons(persons.filter((person) => person.id !== id))
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
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App
