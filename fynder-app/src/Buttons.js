import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Buttons.css"
import { useFavorite } from "./context/GlobalContext"
import TinderCard from "react-tinder-card";



function Buttons({ name, image }) {
    const { favorite, setFavorite } = useFavorite()
    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const savedPlaces = JSON.parse(localStorage.getItem("places"));
        if (savedPlaces) {
            setPlaces(savedPlaces);
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);
    // const savedPlaces = () => { }
    useEffect(() => {
        if (loading === false) {
            localStorage.setItem("places", JSON.stringify(places))
        }
    }, [places]);
    useEffect(() => {
        console.log(favorite);
    }, [favorite]);

    function saved() {
        const newPlace = {
            name: name,
            image: image,
        }
        setPlaces([...places, newPlace])
        const savedPlaces = JSON.parse(localStorage.getItem("savedPlaces")) || [];
        savedPlaces.push(newPlace);
        localStorage.setItem("savedPlaces", JSON.stringify(savedPlaces));
    }

    return (
        <div className="buttons">
            <IconButton>
                <ThumbDownIcon className="ThumbDownIcon" fontSize="large" />
            </IconButton>
            <IconButton>
                {/* on click to run the save place function when ever the button is clicked */}
                <FavoriteIcon className="FavoriteIcon" fontSize="large" onClick={() => setFavorite("new")} />
            </IconButton>
            <IconButton>
                <ThumbUpIcon className="ThumbUpIcon" fontSize="large" onClick />
            </IconButton>
        </div>
    )


}

export default Buttons;