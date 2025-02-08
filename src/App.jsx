import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/Usercard.jsx'
import UserForm from './components/UserForm.jsx'

function App() {

  const URL = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  
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
    
    const filterUsers = users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.address?.city.toLowerCase().includes(search.toLowerCase())
    )

    const addUser = (newUser) => {
      setUsers([...users, newUser])
    }

  return (
    <>
      <header className='header'>
        <h1>Challenge For It</h1>
        <input
          type="text"
          placeholder='Buscar por nombre, username, email o ciudad'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
      </header>
      
      <UserForm addUser={addUser} />

      <main className='main'>
        {filterUsers.length > 0 ? (
          filterUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <p className='no-results'>No se encontraron resultados</p>
        )}
      </main>
    </>
  )
}

export default App
