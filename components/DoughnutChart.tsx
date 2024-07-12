"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const adata = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#0c6dd2", "#0988d8"],
        hoverOffset: 4,
        labels: ["Savings", "Checking", "Credit Card"],
      },
    ],
  };
  return (
    <div>
      <Doughnut
        data={adata}
        options={{
          cutout: "60%",
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DoughnutChart;
