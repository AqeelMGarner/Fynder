import React from 'react';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';

function DislikeButton() {
    return (
        <div>
            <IconButton>
                <ThumbDownIcon className="ThumbDownIcon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default DislikeButton