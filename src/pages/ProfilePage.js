import React, { useState } from 'react'
import useStore from '../store/main'
import Toolbar from "../components/Toolbar"


const ProfilePage = () => {
    const { setUserData } = useStore()
    const [username, setUsername] = useState('')
    const [profileImageUrl, setProfileImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserData(username, profileImageUrl)
        alert('Profile data saved!')
    }

    return (
        <div className="profile-page">
            <h2>
                <Toolbar/>
            </h2>
            <h2>Set Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-cont1">
                    <label className="text-bg-danger" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>

                <div className="input-cont1">
                    <label  className="text-bg-danger" htmlFor="profileImageUrl">Profile Image URL</label>
                    <input
                        type="text"
                        id="profileImageUrl"
                        value={profileImageUrl}
                        onChange={(e) => setProfileImageUrl(e.target.value)}
                        placeholder="Enter profile image URL"
                    />
                </div>
                <button className="" type="submit">Save Profile</button>
            </form>

        </div>
    )
}

export default ProfilePage;
