"use client"
import React from "react";
import { useState } from "react";

const SearchBar = ({ handleCitySearch, city }) => {

    const [formValues, setFormValues] = useState("")

  return (
    <div className="flex flex-col w-screen px-6 py-2 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-400 min-h-12 text-slate-100 sm:flex-wrap">
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleCitySearch(formValues);
            setFormValues("")
          }}
        >
          <label className="mt-2 text-xl font-bold">.Weather</label>
          <input
            className="px-2 mx-2 mt-2 rounded-md text-slate-700"
            placeholder="Enter a city and country code"
            value={formValues}
            onChange={(event) => {
              setFormValues(event.target.value);
            }}
          ></input>
          <button className="px-2 mt-2 rounded-md bg-slate-600 text-white-600"
          type="submit">Go!</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
