import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "./context/GlobalContext";
import "./SearchBar.css";

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [xids, setXids] = useState([]);
    const { setPlacesInfo } = useContext(GlobalContext);

    // This calls the initial API to gather the lon + lat and pass it on
    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=${searchQuery}`, {
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "57596d09f9msh76da75d1881374dp1dd71ejsna28780aa4c28",
                "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(properties => {
                setLongitude(properties.lon);
                setLatitude(properties.lat);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        if (longitude && latitude) {
            handlePlaces();
        }
    }, [longitude, latitude]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    // This takes the lon + lat of target city and passes it so we're able to access the unique ID of nearby objects
    const handlePlaces = () => {
        fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?lat=${latitude}&lon=${longitude}&radius=1000&limit=50&format=json`, {
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "57596d09f9msh76da75d1881374dp1dd71ejsna28780aa4c28",
                "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(properties => {
                const xids = properties.map(property => property.xid);
                setXids(xids);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        if (xids.length > 0) {
            handlePlacesInfo();
        }
    }, [xids]);

    // This maps through the unique ids (xids) and creates objects out of desired information, it then passes it up to a global variable called placesInfo
    const handlePlacesInfo = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '57596d09f9msh76da75d1881374dp1dd71ejsna28780aa4c28',
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
            }
        };

        const newPlacesInfo = [];

        Promise.all(xids.map((xid) =>
            fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/${xid}`, options)
                .then(response => response.json())
                .then(response => {
                    if (response.preview.source && response.wikipedia_extracts.text) {
                        const image = response.preview.source;
                        const text = response.wikipedia_extracts.text;
                        const name = response.name;
                        const wiki = response.wikipedia;

                        const placeInfoObj = {
                            name: name,
                            image: image,
                            text: text,
                            wiki: wiki
                        };

                        newPlacesInfo.push(placeInfoObj);
                    }
                })
                .catch(err => console.error(err))
        )).then(() => {
            setPlacesInfo(newPlacesInfo);
        });
    };

    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid" className='navBar'>
                    <form class="d-flex" role="search" onSubmit={handleSearch}>
                        <input class="form-control me-2" type="search" placeholder="Enter city here" aria-label="Search" value={searchQuery} onChange={handleInputChange} />
                        <button class="btn btn-outline-success" className="submit" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default SearchBar;