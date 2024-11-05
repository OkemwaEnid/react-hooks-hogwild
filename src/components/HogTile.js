import React, { useState } from "react";

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="hog-tile" onClick={() => setShowDetails(!showDetails)}>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} lbs</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {hog.highestMedalAchieved}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              hideHog(hog.name);
            }}
          >
            Hide Hog
          </button>
        </div>
      )}
    </div>
  );
}

export default HogTile;
