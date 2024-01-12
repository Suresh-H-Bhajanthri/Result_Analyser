import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import PropTypes from "prop-types";

const prepareChartData = (studentDetails) => {
  const labels = studentDetails.map((studentDetail) => studentDetail.usn); 
  const datasets = [
    {
      label: 'ISA1',
      data: studentDetails.map((studentDetail) => studentDetail.marks.isa1),
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false,
      type: 'line',
    },
    {
      label: 'ISA2',
      data: studentDetails.map((studentDetail) => studentDetail.marks.isa2),
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false,
      type: 'line',
    },
    {
      label: 'ESA',
      data: studentDetails.map((studentDetail) => studentDetail.marks.esa),
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: false,
      type: 'line',
    },
  ];

  return { labels, datasets };
};

const LineChart = ({ studentDetails }) => {
  const chartData = prepareChartData(studentDetails);

  const options = {
    scales: {
      x: {
        type: 'category',
        position: 'bottom',
        ticks: {
          callback: (value, index, values) => {
            return studentDetails[index].usn;
          },
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        min: 0, // Set the minimum value for the y-axis
        max: 50, // Set the maximum value for the y-axis
      },
    },
  };
  

  return <Line data={chartData} options={options} />;
};

LineChart.propTypes = {
  studentDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      usn: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      division: PropTypes.string.isRequired,
      marks: PropTypes.shape({
        isa1: PropTypes.number.isRequired,
        isa2: PropTypes.number.isRequired,
        esa: PropTypes.number.isRequired, 
      }).isRequired,
    })
  ).isRequired,
};

export default LineChart;



// const LineChart = () => {
//   return (
//     <div>LineChart</div>
//   )
// }

// export default LineChart