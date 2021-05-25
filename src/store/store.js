import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../components/country/countrySlice";

export default configureStore({
  reducer: {
    country: countryReducer,
  },
});
