import React, { useEffect, useState, useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import "../styles/Countries.css";
import Country from "./Country";

function Countries() {
  const [countries, setCountries] = useContext(CountriesContext);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState(null);

  useEffect(() => {
    filterCountriesByRegion();
  }, [region]);

  function filterCountriesByRegion() {
    if (region.length > 2) {
      return fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    } else {
      return fetch(`https://restcountries.eu/rest/v2/all`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
  }
  return (
    <>
      <div className="Filters">
        <div className="filters-left">
          <div className="filters-input-container">
            <i class="fa fa-search"></i>
            <input
              onChange={(e) => setCountryName(e.target.value)}
              placeholder="Search for a country..."
            />
          </div>
        </div>
        <div className="filters-right">
          <select onChange={(e) => setRegion(e.target.value)}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="Countries">
        {countries.length < 1 && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
        {countries
          .filter((data) => {
            if (countryName === null) return data;
            else if (
              data.name.toLowerCase().includes(countryName.toLowerCase())
            ) {
              return data;
            }
          })
          .map((country) => (
            <Country
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          ))}
      </div>
    </>
  );
}

export default Countries;
