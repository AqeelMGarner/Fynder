
import React, { useContext, useEffect, useState, useMemo, useRef } from 'react';
=======


import TinderCard from "react-tinder-card";
import { GlobalContext } from "./context/GlobalContext";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import "./PlaceCards.css";

function PlaceCards() {
    const { placesInfo, topFive, setTopFive } = useContext(GlobalContext);
    const { toggleSidebar } = useContext(GlobalContext)

    // Bits of the below code are copied from github user 3DJakob then modified for our purpose. The "unused" variables are vital to the code working for some reason. I don't know why. 

    const [currentIndex, setCurrentIndex] = useState(placesInfo - 1)
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)


    // initialize childRefs array
    const [childRefs, setChildRefs] = useState([]);


    useEffect(() => {
        setChildRefs(
            Array(placesInfo.length)
                .fill(0)
                .map(() => React.createRef())
        );
    }, [placesInfo]);

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }
    const canSwipe = currentIndex >= 0


    // This tracks whichever card was swiped right/thumbsup'd and saves it to local storage
    const swiped = (direction, name, image, wiki, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)

        if (direction === 'right') {
            console.log("Saving to Liked Places");
            const savedPlaces = JSON.parse(localStorage.getItem('savedPlaces')) || [];
            savedPlaces.push({ name: name, image: image, wiki: wiki });
            localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
        }
        const savedPlaces = JSON.parse(localStorage.getItem("savedPlaces")) || [];

        // Get the last 5 unique saved places, omitting duplicates. topFive then gets set as a global variable so we can use it in the Sidebar component.
        const topFive = [];
        for (let i = savedPlaces.length - 1; i >= 0 && topFive.length < 5; i--) {
            if (!topFive.some((place) => place.name === savedPlaces[i].name)) {
                topFive.push(savedPlaces[i]);
            }
        }
        console.log("Top Five: ", topFive);
        setTopFive(topFive)
    }

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < placesInfo.length) {

            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!

        }

    }


    const favoriteClick = () => {
        const savedPlaces = JSON.parse(localStorage.getItem("savedPlaces")) || [];
        // Get the last 5 unique saved places, omitting duplicates
        const topFive = [];
        for (let i = savedPlaces.length - 1; i >= 0 && topFive.length < 5; i--) {
            if (!topFive.some((place) => place.name === savedPlaces[i].name)) {
                topFive.push(savedPlaces[i]);
            }
        }
        console.log("Top Five: ", topFive);
        setTopFive(topFive)
        // Toggle sidebar open/close state
    // Here's where 3DJakob's code ends (Thank you, 3DJakob)

    const favoriteClick = () => {
        toggleSidebar();
    };

    return (
        <div>
            <div className="PlaceCards__cardContainer">
                {placesInfo.map((place, index) => (

                    <TinderCard
                        ref={childRefs[index]}
                        className="swipe"
                        key={place.name}
                        preventSwipe={["up", "down"]}
                        flickOnSwipe='true'
                        onCardLeftScreen={() => outOfFrame(place.name, index)}

                        onSwipe={(dir) => swiped(dir, place.name, place.image, place.wiki, index)}
                    >
                        <div
                            style={{ backgroundImage: `url(${place.image})` }}
                            className="card"
                        >
                            <div className="cardInfo">
                                <h3>{place.name}</h3>
                                <p>{place.text}</p>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
            {
                placesInfo.length > 0 && (
                    <div className="buttons">
                        <IconButton> <ThumbDownIcon className="ThumbDownIcon" fontSize="large" style={{ backgroundColor: !canSwipe }} onClick={() => swipe('left')}>Swipe left!</ThumbDownIcon></IconButton>
                        <IconButton> <FavoriteIcon className="FavoriteIcon" fontSize="large" onClick={favoriteClick} /></IconButton>
                        <IconButton> <ThumbUpIcon className="ThumbUpIcon" fontSize="large" style={{ backgroundColor: !canSwipe }} onClick={() => swipe('right')}>Swipe right!</ThumbUpIcon> </IconButton>
                    </div>)
            }
        </div >
    );
}

export default PlaceCards;
