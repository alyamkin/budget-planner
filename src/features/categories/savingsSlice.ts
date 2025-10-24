import { createSlice } from '@reduxjs/toolkit';
import type { Period } from '@/shared/types';

type SavingsType = 'CASH' | 'TFSA' | 'RESP' | 'RDSP' | 'RRSP' | 'Other';

interface Savings {
  id: string;
  label: string;
  type: SavingsType;
  period: Period;
  amount: number;
}

const initialState: Savings[] = [];

const savingsSlice = createSlice({
  name: 'savings',
  initialState,
  reducers: {},
});

export default savingsSlice.reducer;
