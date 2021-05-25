import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountry } from "./countrySlice";

export default function CountryDisplay() {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [userCountry, setUserCountry] = useState();
  return (
    <section style={{ margin: "0 auto", width: "40%" }}>
      {country.findCountry ? (
        <div>
          <p>Name: {country.countries[0].name}</p>
          <p>Capital: {country.countries[0].capital}</p>
          <p>Flag:</p>{" "}
          <img style={{ height: "100px" }} src={country.countries[0].flag} />
          <p>Region: {country.countries[0].region}</p>
        </div>
      ) : (
        <div style={{ height: "200px" }}>Country does not exist.</div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchCountry(userCountry));
        }}
      >
        <input onChange={(e) => setUserCountry(e.target.value)} />
        <button>Search Country and Save Payload to Store</button>
      </form>
    </section>
  );
}
