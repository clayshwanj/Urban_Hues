import React from "react";

const FiltersBar = ({ onFilterChange }) => {
  return (
    <div className="filters-bar">
      <label>
        Category:
        <select onChange={(e) => onFilterChange("category", e.target.value)}>
          <option value="all">All</option>
          <option value="dresses">Dresses</option>
          <option value="romper">Romper</option>
          <option value="blouse">Blouses</option>
          <option value="sweater">Sweaters</option>
          <option value="pants">Pants</option>
          <option value="jumpsuit">Jumpsuit</option>
          <option value="outfits">Outfits</option>
        </select>
      </label>
      <label>
        Color:
        <select onChange={(e) => onFilterChange("color", e.target.value)}>
          <option value="all">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="green">Green</option>
          <option value="beige">Biege</option>
          <option value="grey">Grey</option>
          <option value="stripes">Stripes</option>
          <option value="plaid">Plaid/Checked</option>
        </select>
      </label>
    </div>
  );
};

export default FiltersBar;
