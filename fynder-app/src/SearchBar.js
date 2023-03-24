import React, { useState } from 'react';
import "./SearchBar.css";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [xid, setXid] = useState("");

    // this is to get the longitude and latitude
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
                handlePlaces(); // call handlePlaces function after the data has been fetched
            })
            .catch(error => console.log(error));

    }

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    // This is to parse the longitude and latitude into an xid
    const handlePlaces = () => {
        fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?lat=${latitude}&lon=${longitude}&radius=500&limit=20&format=json`, {
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "57596d09f9msh76da75d1881374dp1dd71ejsna28780aa4c28",
                "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(properties => console.log(properties[0].xid))
            .catch(error => console.log(error));
    }

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
