import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';

function Chart() {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          setChartData(await fetchChartData());
        };
        fetchAPI();
        console.log(chartData);
      }, []);

    return (
        <div>
            <h2>Cumulative Cases</h2>
            <Line
            data={{
                labels: chartData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [{
                    data:chartData.map((data) => data.totalConfirmed)
                }]
            }}
            />
            <h2>Cumulative Deaths</h2>
            <Line
            data={{
                labels: chartData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [{
                    data:chartData.map((data) => data.deaths.total)
                }]
            }}
            />
        </div>
    )
}

export default Chart
