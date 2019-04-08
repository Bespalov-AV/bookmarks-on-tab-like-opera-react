import React from 'react';
import './BkItem.css';

const getClassColor = () => {
    const colorInd = Math.round(Math.random() * 10)
    const className = { backgroundColor: `var(--bg-color${colorInd})` }
    console.log(className)
    return className
}

export default ({ title, currentBk }) => {
    const style = getClassColor()
    return (
        <div
            className="bk-item"
            style={style}
        >
            {title}


        </div>
    )
}