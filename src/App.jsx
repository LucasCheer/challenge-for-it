import {useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/Usercard.jsx'

function App() {

  const URL = 'https://jsonplaceholder.typicode.com/users'

  const [users, setUsers] = useState([])

  
  const fetchUsers = async () => {

    try{
      const response = await fetch(URL)
      const data = await response.json()
      setUsers(data)
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => { fetchUsers() }, [])
  
  return (
    <>
    <header className='header'>
      <h1>Challenge For It</h1>
    </header>
    <main className='main'>
      {
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      }
    </main>
    </>
  )
}

export default App
