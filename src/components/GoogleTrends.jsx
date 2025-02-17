// FRONTEND: GoogleTrends.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GoogleTrends = () => {
  const [chartData1, setChartData1] = useState(null);
  const [chartData2, setChartData2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);
  const [totalSearches1, setTotalSearches1] = useState(null);
  const [totalSearches2, setTotalSearches2] = useState(null);

  const [params, setParams] = useState({
    keyword1: "iPhone",
    geo1: "US",
    startDate1: "2025-01-01",
    endDate1: "2025-02-01",
    sum1: false,
    keyword2: "Samsung",
    geo2: "IN",
    startDate2: "2025-01-01",
    endDate2: "2025-02-01",
    sum2: false,
  });

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get("http://localhost:5000/trends", { params: { ...params, keyword: params.keyword1, geo: params.geo1, startDate: params.startDate1, endDate: params.endDate1, sum: params.sum1.toString() } }),
          axios.get("http://localhost:5000/trends", { params: { ...params, keyword: params.keyword2, geo: params.geo2, startDate: params.startDate2, endDate: params.endDate2, sum: params.sum2.toString() } }),
        ]);

        const data1 = res1.data;
        const data2 = res2.data;

        setChartData1({
          labels: data1.labels,
          datasets: [{
            label: `Google Trends Interest for ${params.keyword1}`,
            data: data1.values,
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            fill: true,
          }],
        });

        setChartData2({
          labels: data2.labels,
          datasets: [{
            label: `Google Trends Interest for ${params.keyword2}`,
            data: data2.values,
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            fill: true,
          }],
        });

        const totalSearch1 = data1.values.reduce((acc, val) => acc + val, 0);
        const totalSearch2 = data2.values.reduce((acc, val) => acc + val, 0);
        setTotalSearches1(totalSearch1);
        setTotalSearches2(totalSearch2);

        setComparisonResult(
          totalSearch1 > totalSearch2
            ? `${params.keyword1} has higher interest.`
            : totalSearch2 > totalSearch1
            ? `${params.keyword2} has higher interest.`
            : "Both keywords have equal interest."
        );
      } catch (err) {
        console.error("Error fetching trends data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Google Trends Comparison</h2>

      <div className="mb-6">
        <h3 className="font-semibold">Input Keywords</h3>
        <input type="text" placeholder="Keyword 1" value={params.keyword1} onChange={(e) => setParams({ ...params, keyword1: e.target.value })} className="p-2 border rounded mr-2" />
        <input type="text" placeholder="Keyword 2" value={params.keyword2} onChange={(e) => setParams({ ...params, keyword2: e.target.value })} className="p-2 border rounded" />
      </div>

      {loading && <p>Loading charts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex space-x-4">
        {chartData1 && <div className="w-1/2"><Line data={chartData1} /></div>}
        {chartData2 && <div className="w-1/2"><Line data={chartData2} /></div>}
      </div>

      {comparisonResult && (
        <div className="mt-6 text-lg font-semibold">
          {comparisonResult}
          <p>Total searches for {params.keyword1}: {totalSearches1}</p>
          <p>Total searches for {params.keyword2}: {totalSearches2}</p>
        </div>
      )}
    </div>
  );
};

export default GoogleTrends;
