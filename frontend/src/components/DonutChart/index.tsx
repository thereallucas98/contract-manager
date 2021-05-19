import { useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import Chart from 'react-apexcharts';
import api from '../../services/api';

const BarChart = () => {
  const [total, setTotal] = useState(0);
  const [hasExpired, setHasExpired] = useState(0);

  useEffect(() => {
    async function loadAmoutOfContracts() {
      const response = await api.get('contracts/total');
      const allContracts = await api.get('/contracts/list');
      // console.log(allContracts.data.length);
      let quantity = 0;
      for (let i = 0; i < allContracts.data.length; i++) {
        // console.log(allContracts.data[i].expected_finished_date);
        if (parseISO(String(allContracts.data[i].expected_finished_date)) <= new Date()) {
          quantity++;
        }

        setHasExpired(quantity);
      }
      // console.log(response);
      setTotal(response.data);


    }
    loadAmoutOfContracts();
  }, [])

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '70%',
        barHeight: '70%',
      }
    }
  };

  const mockData = {
    labels: {
      categories: ['Contratos Cadastrados', 'Contrados a Vencer']
    },
    series: [
      {
        name: "Quantidade",
        data: [total, hasExpired]
      }
    ]
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="350"
      width="400"
    />
  );
}

export default BarChart;