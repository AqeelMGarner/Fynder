import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

function Saved() {
    return (
        <div>
            <IconButton>
                <FavoriteIcon className="FavoriteIcon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Saved