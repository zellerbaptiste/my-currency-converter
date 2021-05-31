import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { convert } from "../../utils/currencyUtils";

// export const initialState = {
//     loading: false,
//     hasErrors: false,
//     rates: [],
// }

export const getRates = createAsyncThunk("rates/getRates", async () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
//       res.json()
//   );
  // return fetch('http://apilayer.net/api/live?access_key=0cd4ad2160b37a2336359f167a87726e&currencies=EUR,CAD&source=USD&format=1').then((res) =>
  //     res.json()
  // );
  return [
    {
      success: true,
      terms: "https://currencylayer.com/terms",
      privacy: "https://currencylayer.com/privacy",
      timestamp: 1622254444,
      source: "USD",
      quotes: {
        USDEUR: 0.820173,
        USDCAD: 1.207404,
      },
    },
  ];
});

export const converterSlice = createSlice({
  name: "converter",
  initialState: {
    rates: [],
    status: null,
    // convertingAmount: 0,
    amountConverted: 0,
  },
  reducers: {
    convertCurrency: (state, action) => {
        debugger;
    //   state.amountConverted = action.payload ? convert({ amount: action.payload , state }) : payload;
      state.amountConverted = action.payload ? action.payload * state.rate[0] : action.payload;
    },
    // getRates: state => {
    //     state.loading = true
    // },
    // getRatesSuccess: (state, { payload }) => {
    //     state.rates = payload
    //     state.loading = false
    //     state.hasErrors = false
    // },
    // getRatesFailure: state => {
    //     state.loading = false
    //     state.hasErrors = true
    // },
  },
  extraReducers: {
    [getRates.pending]: (state, action) => {
      state.status = "loading";
    },
    [getRates.fulfilled]: (state, { payload }) => {
      state.rates = payload;
      state.status = "success";
    },
    [getRates.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { convertCurrency } = converterSlice.actions;

export const ratesSelector = (state) => state.converter.rates;
export const amountConvertedSelector = (state) => state.converter.amountConverted;
// export const convertingAmountSelector = (state) => state.converter.convertingAmount;

export default converterSlice.reducer;
