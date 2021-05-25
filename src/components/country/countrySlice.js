import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [{ name: null }],
    findCountry: true,
  },
  reducers: {
    countrySave: (state, { payload }) => {
      state.countries = payload;
      state.findCountry = true;
    },
    noCountry: (state) => {
      state.findCountry = false;
    },
  },
});

export const fetchCountry = (countryId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${countryId}?fullText=true`
    );
    const data = await res.data;
    dispatch(countrySave(data));
  } catch (err) {
    dispatch(noCountry());
  }
};
export const { countrySave, noCountry } = countrySlice.actions;
export default countrySlice.reducer;
