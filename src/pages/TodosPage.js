import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Toolbar from "../components/Toolbar"

const TodosPage = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)

            .then(response => response.json())
            .then(data => {
                setPosts(data); // Store fetched data in 'post' state
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
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
                    <h3>Todos</h3>
                    <div className="user5">
                        {posts.map(post => (
                            <div key={post.id} className="post-card card2">
                                <h4>{post.title}</h4>
                                <h4>
                                    {post.completed ? (
                                        <span style={{color: 'green'}}>Completed</span>
                                    ) : (
                                        <span style={{color: 'red'}}>Not Completed</span>
                                    )}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodosPage;