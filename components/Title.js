import React from "react";

const Title = ({ city, country }) => {
  //logging city and country to check for duplicates
  console.log("Title Component - city:", city);
  console.log("Title Component - country:", country);

  return (
    <div className="pt-8 mx-auto">
      <h1 className="text-4xl capitalize sm:text-6xl text-slate-700">
        {city}
        {city && country && ", "}
        {country && <span className="text-blue-500">{country}</span>}
      </h1>
    </div>
  );
};

export default Title;
