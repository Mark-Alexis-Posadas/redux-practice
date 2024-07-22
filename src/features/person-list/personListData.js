import { createSlice } from "@reduxjs/toolkit";
import { personListData } from "../../components/PersonList/data";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const initialState = {
  personListData: personListData,
  countries: [],
};
export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/all" }),

  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "all",
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;

export const personListSlice = createSlice({
  initialState,
  name: "personList",
  isModalOpen: false,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = personListSlice.actions;
export default personListSlice.reducer;
