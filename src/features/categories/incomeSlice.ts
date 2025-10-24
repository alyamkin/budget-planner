import { createSlice } from '@reduxjs/toolkit';
import type { Period } from '@/shared/types';

interface Income {
  id: string;
  label: string;
  period: Period;
  amount: number;
}

const initialState: Income[] = [];

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {},
});

export default incomeSlice.reducer;
