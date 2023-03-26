// import React, { useEffect, useState } from 'react';
// import TinderCard from "react-tinder-card";
// import "./PlaceCards.css";
// import { placeInfoObj } from './SearchBar';



// function PlaceCards(props) {
//     const [places, setPlaces] = useState([placeInfoObj]);
//     console.log(places);

//     useEffect(() => {
//         // This will run ONCE when the component loads, and never again.

//     }, [places]);

//     return (
//         <div>

//             <div className="PlaceCards__cardContainer">
//                 {places.map((placeInfoObj) => (
//                     <TinderCard
//                         className="swipe"
//                         key={placeInfoObj.name}
//                         preventSwipe={["up", "down"]}
//                     >
//                         <div
//                             style={{ backgroundImage: `url(${placeInfoObj.url})` }}
//                             className="card">
//                             <h3>{placeInfoObj.name}</h3>
//                         </div>
//                     </TinderCard>
//                 )
//                 )}
//             </div>
//         </div>
//     );
// }

// export default PlaceCards

import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import "./PlaceCards.css";

function PlaceCards(props) {
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        setPlaces(props.placesInfo);
    }, [props.placesInfo]);

    useEffect(() => {
        console.log(places); // log the places object whenever it changes
    }, [places]);

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
                            <h3>{place.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default PlaceCards;
