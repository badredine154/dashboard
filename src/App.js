import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import Total from './components/Total';
import { propertyData } from './data/Data';
import { Chart as ChartJS } from 'chart.js/auto';
import BarChartRent from './components/BarChart2';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
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
const [PropertyDataRent, setpropertyDataRent] = useState({
  labels: propertyData.map((data) => data.month),
  datasets: [{
    label: "properties rented",
    data: propertyData.map((data) => data.rent),
    backgroundColor: "blue",
    borderColor:"black",
    borderWidth:"1",
},
]
})
return (
  <div className="content-container">
    <div className="row">
    <Total />
    </div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item><BarChart chartData={PropertyData} /></Item>
          </Grid>
          <Grid item xs={8}>
          <Item><BarChartRent chartData={PropertyDataRent} /></Item>
        </Grid>
      </Grid>
    </Box>
  </div>
);
}

export default App;
