import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api/index';
// import { Line, Bar } from 'react-chartjs-2';

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
            {chartData.map((data) => {
				return (
					<h4>{data.totalConfirmed}</h4>
				);
			})}
            <h2>Cumulative deaths</h2>
            {chartData.map((data) => {
				return (
					<h4>{data.deaths.total}</h4>
				);
			})}
        </div>
    )
}

export default Chart
