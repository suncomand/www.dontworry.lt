import React from 'react'
import useStore from '../store/main'
import Toolbar from "../components/Toolbar"

const AllPostPage = () => {
    const { posts,deletePost } = useStore()
        const handleDelete = (postId) => {
            deletePost(postId)
        }
    return (
        <div className="all-posts-page">
            <h2>
                <Toolbar />
            </h2>
            <h2>All Posts</h2>

            {posts.length === 0 ? (
                <p>No posts available. Create one!</p>
            ) : (
                <div className="posts-list">
                    {posts.map((post, index) => (
                        <div key={index} className="post-card">
                            <img src={post.imageUrl} alt="Post Image" className="post-image"/>
                            <p className="post-description text-white text-center">{post.description}</p>
                            <p className="post-username text-white text-center">{post.username}</p>
                            <button onClick={() => handleDelete(post.id)}>DELETE post</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AllPostPage;
