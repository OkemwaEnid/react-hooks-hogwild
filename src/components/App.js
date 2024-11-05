import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import HogFilter from "./HogFilter";
import HogForm from "./HogForm";
import "./App.css";

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState({});

  // Add new

  const addHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  // Filtering
  const filteredHogs = showGreasedOnly
    ? hogData.filter((hog) => hog.greased)
    : hogData;

  // Sorting
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  // Hide feature
  const hideHog = (hogName) => {
    setHiddenHogs((prev) => ({ ...prev, [hogName]: true }));
  };

  // Combined
  const filteredAndSortedHogs = sortedHogs;

  return (
    <div className="App">
      <HogFilter
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="hog-list">
        {filteredAndSortedHogs.map(
          (hog) =>
            !hiddenHogs[hog.name] && (
              <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
            )
        )}
      </div>
      <HogForm addHog={addHog} />
    </div>
  );
}

export default App;
