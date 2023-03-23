import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';

function LikeButton() {
    return (
        <div>
            <IconButton>
                <ThumbUpIcon className="ThumbUpIcon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default LikeButton