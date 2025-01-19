import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Toolbar from "../components/Toolbar"

const PostsPage = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Fetch post details based on the ID
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.error('Error fetching post details:', error)
            })
    }, [id])

    if (!posts) {
        return <p>Loading post...</p>;
    }

    return (
        <div className="text-center d-flex flex-column align-items-center">
            <h2>
                <Toolbar />
            </h2>
            <div>
                <div>
                    <h1>Posts</h1>
                    <div className="user5">
                        {posts.map(post => (
                            <Link className="text-white" key={post.id} to={`/singlePost/${post.id}`}>
                                <div key={post.id} className="post-card card2">
                                    <h5>{post.title}</h5>
                                    <p>{post.body}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;

