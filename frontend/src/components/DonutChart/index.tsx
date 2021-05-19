import Chart from 'react-apexcharts';

const BarChart = () => {

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
        data: [100, 20]
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