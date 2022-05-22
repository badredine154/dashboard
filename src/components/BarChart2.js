import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChartRent({ chartData }) {
    return (
            <Bar data={chartData} />
    )
}

export default BarChartRent;