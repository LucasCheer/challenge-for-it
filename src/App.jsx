import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/Usercard.jsx'

function App() {

  const URL = 'https://jsonplaceholder.typicode.com/users'

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const filterUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.address.city.toLowerCase().includes(search.toLowerCase())) 

  const fetchUsers = async () => {

    try {
      const response = await fetch(URL)
      const data = await response.json()
      setUsers(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { fetchUsers() }, [])

  return (
    <>
      <header className='header'>
        <h1>Challenge For It</h1>
        <input
          type="text"
          placeholder='Buscar por nombre'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
      </header>
      <main className='main'>
        {filterUsers.length > 0 ? (
          filterUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </main>

    </>
  )
}

export default App
