import React from "react";
import {} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Title,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const dates = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") {
      dates.push(new Date(arr[i][0]).toLocaleTimeString());
    } else dates.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  console.log(dates);

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "rgb(255,99,132) ",
        backgroundColor: "rgba(255,99,132,0.5) ",
      },
    ],
  };

  return <Line options={{ responsive: true }} data={data}></Line>;
};

export default Chart;
