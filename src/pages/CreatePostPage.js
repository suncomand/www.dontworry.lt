import React, { useState } from 'react'
import useStore from '../store/main'
import Toolbar from "../components/Toolbar"

const CreatePostPage = () => {
    const { addPost } = useStore();
    const [description, setDescription] = useState('')
    const [postImageUrl, setPostImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addPost(description, postImageUrl)
        alert('Post created successfully!')
        setDescription('')
        setPostImageUrl('')
    }

    return (
        <div className="profile-page">
            <h2>
                <Toolbar />
            </h2>
            <h2>Create Your Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-cont2">
                    <label className="text-bg-danger" htmlFor="postImageUrl">Post Image URL</label>
                    <input
                        type="text"
                        id="postImageUrl"
                        value={postImageUrl}
                        onChange={(e) => setPostImageUrl(e.target.value)}
                        placeholder="Enter image URL"
                    />
                </div>

                <div className="input-cont2">
                    <label className="text-bg-danger" htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                    />
                </div>

                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePostPage;
