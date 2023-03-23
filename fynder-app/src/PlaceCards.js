import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import "./PlaceCards.css";


function PlaceCards() {
    const [places, setPlaces] = useState([
        {
            name: "Pizza shop",
            url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/ac/70/e3/old-school-since-1979.jpg",
        },
        {
            name: "Pasta shop",
            url: "https://assets.epicurious.com/photos/5ca4cdeeb965482f7c486d20/16:9/w_2560%2Cc_limit/TASTE-TEST--SPAGHETTI-hero-27032019.jpg",
        },
    ]);

    useEffect(() => {
        // This will run ONCE when the component loads, and never again.

    }, [places]);

    return (
        <div>

            <div className="PlaceCards__cardContainer">
                {places.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )
                )}
            </div>
        </div>
    );
}

export default PlaceCards