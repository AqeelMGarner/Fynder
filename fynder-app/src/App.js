import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PlaceCards from "./PlaceCards";
import Buttons from "./Buttons";
import './App.css';

function App() {
  const [placesInfo, setPlacesInfo] = useState([]);
  // const testPlacesInfo = [{ name: 'Place 1', url: 'https://place1.com' }, { name: 'Place 2', url: 'https://place2.com' }, { name: 'Place 3', url: 'https://place3.com' }];


  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Search bar */}
      <SearchBar setPlacesInfo={setPlacesInfo} />


      <div className="body">

        {/* Tinder Cards */}
        <PlaceCards placesInfo={placesInfo} />

      </div>

      <Buttons />
    </div>
  );
}

export default App;
