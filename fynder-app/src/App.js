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
  // const testPlacesInfo = [{ name: 'Place 1', url: 'https://place1.com' }, { name: 'Place 2', url: 'https://place2.com' }, { name: 'Place 3', url: 'https://place3.com' }];

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
