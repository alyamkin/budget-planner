import PeriodSelector from './components/PeriodSelector';

function App() {
  return (
    <>
      <PeriodSelector
        selected={'Daily'}
        onChange={(selected) => {
          console.log(selected);
        }}
      />
    </>
  );
}

export default App;
