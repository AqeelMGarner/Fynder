import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Saved from "./Saved";
import PlaceCards from "./PlaceCards";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
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

        {/* Dislike Button on Left */}
        <DislikeButton />

        {/* Tinder Cards */}
        <PlaceCards placesInfo={placesInfo} />


        {/* Like button on right */}
        <LikeButton />
      </div>

      {/* Saved button */}
      <Saved />

    </div>
  );
}

export default App;
