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



    const swiped = (direction, name, image) => {


        if (direction === 'right') {
            console.log("Saving to Liked Places");
            const savedPlaces = JSON.parse(localStorage.getItem('savedPlaces')) || [];
            savedPlaces.push({ name: name, image: image });
            localStorage.setItem('savedPlaces', JSON.stringify(savedPlaces));
        }
    }


    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }


    // const onSwipe = () => {
    //     console.log('Hello');
    // }

    return (
        <div>
            <div className="PlaceCards__cardContainer">
                {places.map((place) => (

                    <TinderCard
                        className="swipe"
                        key={place.name}
                        preventSwipe={["up", "down"]}
                        flickOnSwipe='true'
                        onCardLeftScreen={() => outOfFrame(place.name)}
                        onSwipe={(dir) => swiped(dir, place.name, place.image)}
                    // onSwipe={onSwipe}

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
