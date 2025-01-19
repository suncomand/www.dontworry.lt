import React from 'react'
import {Link} from 'react-router-dom'

const Toolbar = () => {
    return (
        <div>
        <div className="toolbar-container">
            <Link to="/" className="text-white">HOME</Link>

        </div>
        </div>
    )
}

export default Toolbar;