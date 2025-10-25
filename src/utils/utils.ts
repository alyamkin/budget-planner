import type { Period } from '@/shared/types';

export const periods: Record<Period, number> = {
  Daily: 365,
  Weekly: 52,
  Every2Weeks: 26,
  SemiMonthly: 24,
  Monthly: 12,
  Quarterly: 4,
  Every6Months: 2,
  Annually: 1,
};

export const GetPeriodValue = (value: Period) => periods[value];
