import { useState } from 'react';
import type { Period } from '@/shared/types';

interface Options {
  value: Period;
  label: string;
}

const options: Options[] = [
  { value: 'Daily', label: 'Daily' },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Every2Weeks', label: 'Every 2 weeks' },
  { value: 'SemiMonthly', label: 'Semi-monthly' },
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Quarterly', label: 'Quarterly' },
  { value: 'Every6Months', label: 'Every 6 Months' },
  { value: 'Annually', label: 'Annually' },
];

interface PeriodSelectorProps {
  selected: Period;
  onChange: (period: Period) => void;
}

const PeriodSelector = ({ selected, onChange }: PeriodSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState<Period>(selected);

  const handleSelectedChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = event?.target.value as Period;
    setSelectedValue(selected);
    onChange(selected);
  };

  return (
    <select value={selectedValue} onChange={handleSelectedChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default PeriodSelector;
