import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/Usercard.jsx'
import UserForm from './components/UserForm.jsx'

function App() {
  const URL = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false) 

  const fetchUsers = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    } catch (error) {
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
    setShowModal(false)
  }

  return (
    <>

      <header className='header'>
        <h1 className='title'>Challenge Forit</h1>
        <input
          type="text"
          placeholder='Buscar por nombre, username, email o ciudad'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
      </header>

      <button onClick={() => setShowModal(true)} className="open-modal-btn">
        Agregar Usuario
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={() => setShowModal(false)}>✖</button>
            <UserForm addUser={addUser} />
          </div>
        </div>
      )}

      <h2 className='title'>Usuarios</h2>

      <main className='main'>
        {loading ? <p className='loading'>Cargando...</p> :
        filterUsers.length > 0 ? (
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
