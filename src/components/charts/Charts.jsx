import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { fetchDailyData } from '../api/DailyData';

import styles from './Charts.module.css';

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  console.log(dailyData)
  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      { lineChart}
    </div>
  );
};

export default Charts;