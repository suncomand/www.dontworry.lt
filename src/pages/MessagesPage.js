import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/main';

const MessagePage = () => {
    const { userId } = useParams()
    const { allUsers, sendMessage, setActiveUser } = useStore()
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const messagesEndRef = useRef(null)

    useEffect(() => {
        const user = allUsers.find(user => user.id === parseInt(userId))
        if (user) {
            setMessages(user.messages)
        }
    }, [userId, allUsers])

    useEffect(() => {
        setActiveUser(parseInt(userId))
    }, [userId, setActiveUser])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            sendMessage(parseInt(userId), newMessage)
            setMessages(prevMessages => [
                ...prevMessages,
                { text: newMessage, sender: 'You' }
            ])
            setNewMessage('')
        }
    }

    return (
        <div className="message-page">
            <h2>Chat with {allUsers.find(user => user.id === parseInt(userId))?.username}</h2>
            <div className="messages-container">
                {messages.length === 0 ? (
                    <p>No messages</p>
                ) : (
                    <div className="message-history">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}
                            >
                                <p>{message.text}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessagePage;
