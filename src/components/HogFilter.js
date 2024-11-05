// Add all

import React from "react";

function HogFilter({
  showGreasedOnly,
  setShowGreasedOnly,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="hog-filter">
      <label>
        Show Greased Only:
        <input
          type="checkbox"
          checked={showGreasedOnly}
          onChange={(e) => setShowGreasedOnly(e.target.checked)}
        />
      </label>
      <label>
        Sort By:
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default HogFilter;
