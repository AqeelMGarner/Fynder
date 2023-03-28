import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import Buttons from './Buttons';
import "./PlaceCards.css";

function PlaceCards(props) {
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        setPlaces(props.placesInfo);
    }, [props.placesInfo]);

    // useEffect(() => {
    //     console.log(places); // log the places object whenever it changes
    // }, [places]);

    return (
        <div>
            <div className="PlaceCards__cardContainer">
                {places.map((place) => (
                    
                    <TinderCard
                        className="swipe"
                        key={place.name}
                        preventSwipe={["up", "down"]}
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

        </div>
    );
}

export default PlaceCards;
