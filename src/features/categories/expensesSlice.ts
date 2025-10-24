import { createSlice } from '@reduxjs/toolkit';
import type { Period } from '@/shared/types';

interface Expenses {
  id: string;
  label: string;
  period: Period;
  amount: number;
}

const initialState: Expenses[] = [];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
});

export default expensesSlice.reducer;
