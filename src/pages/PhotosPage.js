import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Toolbar from "../components/Toolbar"

const PhotosPage = () => {
    const { id } = useParams()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPhotos(data)
            })
            .catch((error) => {
                console.error("Error fetching photos:", error)
            })
    }, [id])

    if (photos.length === 0) {
        return <p>Loading photos...</p>
    }

    return (
        <div>
            <h2>
                <Toolbar/>
            </h2>
            <h1>Photos</h1>
            <div className="photos-page">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <h3 className="mrg">{photo.title}</h3>
                        <img src={photo.url} alt={photo.title} className="photo-img"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotosPage;
