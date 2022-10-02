import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const data = {
    labels: labels, //props.labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 0, 10], //props.data1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

    ],
  };
  return (
    <>
      <div style={{ width: "92%", margin: "auto auto" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default BarChart;
