"use client";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    // labels: accounts.map((account) => account.accountName),
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        labels: ["Savings", "Checking", "Credit Card"],
      },
    ],
  };
  return <DoughnutChart data={data} />;
};

export default DoughnutChart;
