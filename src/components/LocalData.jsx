import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get("http://localhost:5000/trends", { params: { keyword: "iPhone" } }),
      axios.get("http://localhost:5000/trends", { params: { keyword: "Samsung" } })
    ])
      .then(([iphoneRes, samsungRes]) => {
        setChartData({
          labels: iphoneRes.data.labels,
          datasets: [
            {
              label: "iPhone Trends",
              data: iphoneRes.data.values,
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
              fill: true,
            },
            {
              label: "Samsung Trends",
              data: samsungRes.data.values,
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              fill: true,
            }
          ]
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Marketplace Price Trends</h2>
      {loading && <p>Loading charts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {chartData && (
        <div>
          <h3 className="font-semibold">iPhone & Samsung Price Trends</h3>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default LineChart;
