import { Button } from '@mui/material';
import React, { useContext, useEffect, useState, useMemo, useRef } from 'react';
import TinderCard from "react-tinder-card";

import { GlobalContext } from "./context/GlobalContext";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import "./PlaceCards.css";
import Sidebar from "./Sidebar";



function PlaceCards() {
    const { placesInfo, topFive, setTopFive } = useContext(GlobalContext);
    const { toggleSidebar } = useContext(GlobalContext)
    // Much of the below code is copied and modified from github user 3DJakob

    const [currentIndex, setCurrentIndex] = useState(placesInfo - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    // console.log(currentIndex);

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

    // const canGoBack = currentIndex < placesInfo.length - 1

    const canSwipe = currentIndex >= 0

    const swiped = (direction, name, image, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)

        if (direction === 'right') {
            console.log("Saving to Liked Places");
            const savedPlaces = JSON.parse(localStorage.getItem('savedPlaces')) || [];
            savedPlaces.push({ name: name, image: image });
            localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));

        }
    }


    const outOfFrame = (name, idx) => {
        // console.log(name + ' left the screen')
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

    }


    const swipe = async (dir) => {
        // console.log();
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
                        onSwipe={(dir) => swiped(dir, place.name, place.image, index)}


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

            <div className="buttons">
                <IconButton> <ThumbDownIcon className="ThumbDownIcon" fontSize="large" style={{ backgroundColor: !canSwipe }} onClick={() => swipe('left')}>Swipe left!</ThumbDownIcon></IconButton>
                <IconButton> <FavoriteIcon className="FavoriteIcon" fontSize="large" onClick={favoriteClick} /></IconButton>
                <IconButton> <ThumbUpIcon className="ThumbUpIcon" fontSize="large" style={{ backgroundColor: !canSwipe }} onClick={() => swipe('right')}>Swipe right!</ThumbUpIcon> </IconButton>
            </div>

        </div >
    );
}

export default PlaceCards;
