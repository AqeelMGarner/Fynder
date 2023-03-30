import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PlaceCards from "./PlaceCards";
import Sidebar from "./Sidebar";
import Buttons from "./Buttons";
import { GlobalProvider } from "./context/GlobalContext";
import './App.css';

function App() {
  const [placesInfo, setPlacesInfo] = useState([]);

  return (
    <div className="App">
      <GlobalProvider>
        <Header />

        {/* Search bar */}
        <SearchBar />


        <div className="body">

          {/* Tinder Cards */}
          <PlaceCards />




        </div>
        <Sidebar />

      </GlobalProvider>

    </div>
  );
}

export default App;
