import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Toolbar from "../components/Toolbar"

const AlbumsPage = () => {
    const { id } = useParams()
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(response => response.json())
            .then(data => {
                setAlbums(data)
            })
            .catch(error => {
                console.error('Error fetching albums:', error)
            });
    }, [id])

    if (albums.length === 0) {
        return <p>Loading albums...</p>
    }

    return (
        <div className="text-center d-flex flex-column align-items-center">
            <h2>
                <Toolbar />
            </h2>
            <div className="main-user-card d-flex flex-row align-items-center">
                <div>
                    <h1>Albums</h1>
                    <h3>Albums for User {id}</h3>
                    {albums.map((album) => (
                        <Link className="text-white" key={album.id} to={`/photos/${album.id}`}>
                            <div key={album.id} className="album-card user6 mrg">
                                <p><strong>Album ID:</strong> {album.id}</p>
                                <p><strong>Title:</strong> {album.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlbumsPage;

