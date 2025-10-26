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
  id: string;
  selected: Period;
  onChange: (period: Period) => void;
}

const PeriodSelector = ({ id, selected, onChange }: PeriodSelectorProps) => {
  const handleSelectedChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event?.target.value as Period);
  };

  return (
    <select
      id={`${id}-period`}
      className="w-full border-b border-gray-300 focus:border-gray-500 pb-1 outline-0"
      value={selected}
      onChange={handleSelectedChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default PeriodSelector;
