import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const CrimeGraph = () => {
  const [chartData, setChartData] = useState({
    labels: "Crime Graph",
    datasets: [
      {
        label: 'Murder and Nonnegligent Manslaughter',
        data: [],
        fill: true,
        backgroundColor: 'rgba(10, 40, 252, 0.8)',
        borderColor: 'rgba(10, 40, 252, 0.8)',
        // borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'
        );

        const { data } = response;

        if (data && Array.isArray(data.data)) {
          // Assuming the data structure matches your expectations
          const labels = data.data.map((crime) => crime.data_year);
          const murderedData = data.data.map((crime) => crime["Murder and Nonnegligent Manslaughter"]);

          setChartData({
            labels,
            datasets: [
              {
                ...chartData.datasets[0],
                data: murderedData,
              },
            ],
          });
        } else {
          console.error('Invalid data format received from the API.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [chartData]);



  return (
    <div className='flex justify-center font-bold mx-6'>
      <Line data={chartData} height={400} options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {},
        legend: {
          labels: {
            fontSize: 20,
          },
        },
      }}  />
    </div>
  );
};

export default CrimeGraph;