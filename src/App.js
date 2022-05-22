import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import Total from './components/Total';
import { propertyData } from './data/Data';
import { Chart as ChartJS } from 'chart.js/auto';


function App() {
  const [PropertyData, setpropertyData] = useState({
    labels: propertyData.map((data) => data.month),
    datasets: [{
      label: "properties sold",
      data: propertyData.map((data) => data.sales),
      backgroundColor: "red",
      borderColor:"black",
      borderWidth:"1",
  },
  ]
})
return (
  <div className="App">
    <div style={{width: 900, height:350,}}>
    <Total />
    </div>

    <div style={{ width: 800 }}>
      <BarChart chartData={PropertyData} />
    </div>
  </div>
);
}

export default App;
