import { useState } from 'react';
import PeriodSelector from './components/PeriodSelector';
import type { Period } from './shared/types';

function App() {
  const [selected, setSelected] = useState<Period>('Monthly');
  return (
    <>
      <PeriodSelector
        id={'income'}
        selected={selected}
        onChange={(selected) => setSelected(selected)}
      />
    </>
  );
}

export default App;
