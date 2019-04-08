import React from 'react';
import './BkFolder.css';


export default ({ title, currentBk }) => {
    return (
        <div
            className="bk-folder"
        >
            {title}
            {currentBk.url}

        </div>
    )
}