import './App.css';

import { mocked_data, chartTitle } from './components/PieChart/mocked_data/mocked_data';
import { Pie } from './components/PieChart';

function App() {
  return (
    <div className="App">
      <Pie data={mocked_data} title={chartTitle} />
    </div>
  );
}

export default App;
