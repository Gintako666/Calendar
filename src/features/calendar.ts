/* eslint-disable operator-assignment */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  date: Date,
  monthData: (Date | undefined)[][]
  year: number
  month: number
} = {
  date: new Date(),
  monthData: [],
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

const userSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthNext: (value) => {
      value.date = new Date(value.year, value.month + 1);
      value.year = new Date(value.year, value.month + 1).getFullYear();
      value.month = new Date(value.year, value.month + 1).getMonth();
    },
    setMonthPrev: (value) => {
      value.date = new Date(value.year, value.month - 1);
      value.year = new Date(value.year, value.month - 1).getFullYear();
      value.month = new Date(value.year, value.month - 1).getMonth();
    },
    setMonth: (value, action: PayloadAction<number>) => {
      value.month = action.payload;
    },
    setYear: (value, action: PayloadAction<number>) => {
      value.year = action.payload;
    },
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
