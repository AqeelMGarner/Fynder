import React from 'react';
import "./Header.css";

function Header() {
    const handleTitleClick = () => {
        window.location.reload();
    }

    return (
        <div>
            <h2 className='fynderTitle' onClick={handleTitleClick}>Fynder</h2>
        </div>
    )
}

export default Header