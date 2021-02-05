import React, { useEffect, useState, createContext } from "react";

export const CountriesContext = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CountriesContext.Provider value={[countries, setCountries]}>
      {props.children}
    </CountriesContext.Provider>
  );
};
