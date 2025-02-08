import React from 'react'

const fetchUsers = ({user}) => {
    return (
        <div className='card'>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Ciudad:</strong> {user.address.city}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Empresa:</strong> {user.company.name}</p>
        </div>
    )
}

export default fetchUsers