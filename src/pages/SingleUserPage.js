import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Toolbar from "../components/Toolbar"

const UserDetailPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data)
            })
            .catch(error => {
                console.error('Error fetching user details:', error)
            })
    }, [id])


    if (!user) {
        return <p>User not found.</p>
    }

    return (
        <div className="text-center d-flex flex-column align-items-center">
            <h2>
                <Toolbar/>
            </h2>
            <div className="main-user-card d-flex flex-row align-items-center user-cont">
                <div>
                    <div className="user-detail-page">
                        <h1>{user.name}</h1>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> <a className="text-white" href={`https://${user.website}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer">{user.website}</a></p>
                    </div>
                </div>
                <div className="button">
                    <div className="d-flex flex-column gap-5">
                        <Link className="text-white bg-black" key={user.id} to={`/posts/${user.id}`}> User Posts</Link>
                        <Link className="text-white bg-black" key={user.id} to={`/albums/${user.id}`}> User Albums</Link>
                        <Link className="text-white bg-black" key={user.id} to={`/todos/${user.id}`}> User Todos</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserDetailPage;

