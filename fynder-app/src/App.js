import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Saved from "./Saved";
import TinderCard from "./TinderCard";
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Search bar */}
      <SearchBar />

      {/* Tinder Cards */}
      <TinderCard />


      {/* Dislike Button on Left */}

      {/* Like button on right */}

      {/* Saved button */}
      <Saved />

    </div>
  );
}

export default App;
