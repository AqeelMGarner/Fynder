import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Saved from "./Saved";
import TinderCard from "./TinderCard";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Search bar */}
      <SearchBar />
      <div className="body">

        {/* Dislike Button on Left */}
        <DislikeButton />
        {/* Tinder Cards */}
        <TinderCard />


        {/* Like button on right */}
        <LikeButton />
      </div>
      {/* Saved button */}
      <Saved />

    </div>
  );
}

export default App;
