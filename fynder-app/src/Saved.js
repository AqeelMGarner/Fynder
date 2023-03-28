import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import "./Saved.css"

function Saved() {
  const [places, setItems] = useState([]);

  //  useEffect(() => {
  //    const places = JSON.parse(localStorage.getItem("places"));
  //    if (places) {
  //      setItems(places);
  //    }
  //  }, []);
  const savedPlaces = () => { }
  return (
    <div>
      <IconButton>
        {/* on click to run the save place function when ever the button is clicked */}
        <FavoriteIcon className="FavoriteIcon" fontSize="large" onClick={savedPlaces} />
      </IconButton>
    </div>
  )
}

export default Saved