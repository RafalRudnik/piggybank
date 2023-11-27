import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 1500,
  loan: 0,
  withdrawHistory: [20, 50, 90],
  depositHistory: [10],
  loanPurpose: "",
  accountHistory: [],
  isLoading: false,
  maxLoan: 10000,
  sortBy: "input",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.depositHistory = [...state.depositHistory, action.payload];
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
      state.withdrawHistory = [...state.withdrawHistory, action.payload];
    },
    addHistory(state, action) {
      state.accountHistory = [...state.accountHistory, action.payload];
    },
    addLoan(state, action) {
      state.balance = state.balance + action.payload;
      state.depositHistory = [...state.depositHistory, action.payload];
      state.loan = state.loan + action.payload;
    },
    payLoan(state, action) {
      state.balance = state.balance - action.payload;
      state.loan = state.loan - action.payload;
      state.withdrawHistory = [...state.withdrawHistory, action.payload];
    },
    sortHistory(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { deposit, withdraw, addHistory, addLoan, payLoan, sortHistory } =
  accountSlice.actions;

export default accountSlice.reducer;
