import React from 'react'
import {Link} from 'react-router-dom'


const Toolbar = () => {
    return (
        <div>
        <div className="toolbar-container">
            <Link to="/list" className="text-white">Users List</Link>
            <Link to="/profile" className="text-white">Profile</Link>
            <Link to="/create-post" className="text-white">Create Post</Link>
            <Link to="/all-post-page" className="text-white">All Posts</Link>
            <Link to="/" className="text-danger">Log Out</Link>
        </div>
        </div>
    )
}

export default Toolbar;