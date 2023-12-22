import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// THIS CALL API FROM REDUX
// export const fetchPortoData = createAsyncThunk(
//   'porto/fetchPortoData',
//   async () => {
//     const data = await Getter();
//     if (data) {
//       return data[0];
//     }
//   },
// );

const initialState = {};

const Slice = createSlice({
  name: 'porto',
  initialState,
  reducers: {
    // onchange data input berdasarkan name input
    setData: (state, action: PayloadAction<Partial<any>>) => ({
      ...state,
      ...action.payload,
    }),
    // nambah list object array
    // addPortfolio: (state, action: PayloadAction<PortfolioItem>) => {
    //   state.portfolio.push(action.payload);
    // },
    // hapus data list by id
    // removePortofolio: (state, action: PayloadAction<{ id: number }>) => {
    //   const { id } = action.payload;
    //   if (state.portfolio.length > 1) {
    //     state.portfolio = state.portfolio.filter((item) => item.id !== id);
    //   }
    // },
    // onchange data list object berdasarkan name input
    // changePortofolio: (
    //   state,
    //   action: PayloadAction<{
    //     id: number;
    //     key: keyof PortfolioItem;
    //     value: string | Date;
    //   }>,
    // ) => {
    //   const { id, key, value } = action.payload;
    //   state.portfolio = state.portfolio.map((portfolioItem) => {
    //     if (portfolioItem.id === id) {
    //       return {
    //         ...portfolioItem,
    //         [key]: value,
    //       };
    //     }
    //     return portfolioItem;
    //   });
    // },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchPortoData.fulfilled, (state, action) => action.payload)
  //       .addCase(fetchPortoData.rejected, (state, action) => {
  //         console.error('Error fetching data:', action.error);
  //       });
  //   },
});

export const { setData } = Slice.actions;

export default Slice.reducer;
