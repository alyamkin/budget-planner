import { configureStore } from '@reduxjs/toolkit';
import incomeReducer from '@/features/categories/incomeSlice';
import savingsReducer from '@/features/categories/savingsSlice';
import expensesReducer from '@/features/categories/expensesSlice';

const store = configureStore({
  reducer: {
    income: incomeReducer,
    savings: savingsReducer,
    expenses: expensesReducer,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
