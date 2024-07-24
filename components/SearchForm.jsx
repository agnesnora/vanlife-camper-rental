"use client";
import React from "react";
import { useState } from "react";
const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [vanType, setVanType] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location, vanType);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          placeholder="Enter keyword or location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <select
          id="van-type"
          value={vanType}
          onChange={(e) => setVanType(e.target.value)}
        >
          <option></option>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
