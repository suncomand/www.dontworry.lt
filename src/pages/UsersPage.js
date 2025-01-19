import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserPage = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <div className="user-page">
            <h1>User List</h1>

            <div className="user-cards">
                {users.length > 0 ? (
                    users.map(user => (
                        <Link key={user.id} to={`/user/${user.id}`} className="user-card-link">
                            <div className="user-card">
                                <h2>{user.name}</h2>
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Loading users...</p>
                )}
            </div>
        </div>
    );
}

export default UserPage;