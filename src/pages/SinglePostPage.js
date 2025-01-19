import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Toolbar from "../components/Toolbar"

const SinglePostPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data)
            })
            .catch((error) => {
                console.error("Error fetching post data:", error)
            })
    }, [id])
    if (!post) {
        return <p>Loading post...</p>
    }

    return (
        <div>
            <h2>
                <Toolbar/>
            </h2>
            <h1>Single Post</h1>
            <div className="user6">
                <div key={post.id} className="post-card">
                    <h5 className="mrg">{post.title}</h5>
                    <p className="mrg">By User {post.userId}</p>
                    <p className="mrg">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;
