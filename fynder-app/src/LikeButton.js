import React, { useEffect, useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';

function LikeButton() {
    const [place, setPlace] = useState([]);

    useEffect(() => {
        localStorage.setItem("place", JSON.stringify(place));
    }, [place]);

    const handleLikeButtonClick = () => {
        // update the place state here
    }

    return (
        <div>
            <IconButton>
                <ThumbUpIcon className="ThumbUpIcon" fontSize="large" onClick={handleLikeButtonClick} />
            </IconButton>
        </div>
    )
}

export default LikeButton