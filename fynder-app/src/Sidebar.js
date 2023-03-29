import React, { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';
import "./Sidebar.css"
import { useSpring, animated } from 'react-spring';

function Sidebar() {
    const { topFive } = useContext(GlobalContext);
    const { sidebarOpen } = React.useContext(GlobalContext);


    const sidebarAnimation = useSpring({

        left: sidebarOpen ? 0 : -20, // slide in from the left when open
        width: sidebarOpen ? '30%' : '0%', // take up 20% of the screen when open
        config: {
            duration: 200
        },
    });


    return (
        <animated.div className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={sidebarAnimation}>
            <ul>
                {topFive.map((place, index) => (
                    <li key={index}>

                        <div>
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
