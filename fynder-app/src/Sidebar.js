import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';
import "./Sidebar.css"
import { useSpring, animated } from 'react-spring';

function Sidebar() {
    const { topFive } = useContext(GlobalContext);
    const { sidebarOpen } = React.useContext(GlobalContext);
    const [currentTopFive, setCurrentTopFive] = useState([]);

    useEffect(() => {
        setCurrentTopFive(topFive);
    }, [topFive]);

    const sidebarAnimation = useSpring({

        left: sidebarOpen ? 0 : -20, // slide in from the left when open
        width: sidebarOpen ? '20%' : '0%', // take up 20% of the screen when open
        config: {
            duration: 200
        },
    });

    const handleClick = (url) => {
        window.location.href = url;
    };


    return (
        <animated.div className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={sidebarAnimation}>
            <ul>
                {currentTopFive.map((place, index) => (
                    <li key={index}>

                        <div onClick={() => handleClick(place.wiki)}>
                            <img src={place.image} alt={place.name} />
                            <h3 className="place-name">{place.name}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </animated.div>
    );
}

export default Sidebar;
