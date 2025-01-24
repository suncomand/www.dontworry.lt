import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/main';

const UserListPage = () => {
    const { allUsers, setActiveUser } = useStore();
    const [newMessage, setNewMessage] = useState('')
    const navigate = useNavigate()

    const handleSendMessage = (userId) => {
        if (newMessage.trim()) {
            setActiveUser(userId)
            navigate(`/messages/${userId}`)
        }
    }
    return (
        <div className="user-list-page">
            <h2>All Users</h2>
            <div className="user-list">
                {allUsers.length === 0 ? (
                    <p>No users yet. Please add some!</p>
                ) : (
                    allUsers.map((user, index) => (
                        <div key={index} className="user-box">
                            <div className="user-item">
                                <img
                                    src={user.profileImageUrl}
                                    alt="Profile"
                                    className="profile-image"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '10%',
                                    }}
                                />
                                <span>Profile name: {user.username}</span>
                                <input
                                    className="input3"
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message"
                                />
                                <button onClick={() => handleSendMessage(user.id)}>Send message</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default UserListPage;
