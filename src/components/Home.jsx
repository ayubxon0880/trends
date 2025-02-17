import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from "react";
import { Chart, registerables } from "chart.js";
import { iphoneData, marketplaces, samsungData,  colors } from './data';

Chart.register(...registerables);

const stats = [
  { title: "Most popular products of this month", value: "17,910", color: "bg-blue-100" },
  { title: "Cheapest products of this month", value: "14,400", color: "bg-red-100" },
  { title: "Most expensive products of this month", value: "880", color: "bg-yellow-100" },
  { title: "Returned and unpopular products of this month", value: "1000", color: "bg-purple-100" },
];





export default function HomePage() {
    return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} p-6 rounded-lg shadow-lg text-center`}>
            <p className="text-lg font-semibold">{stat.title}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* V1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">Google Trends Interest</h2>
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-blue-200 p-4 rounded-lg">
                <div className="p-6 space-y-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-center mb-4">iPhone Price Trends Across Marketplaces</h2>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={iphoneData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                            <XAxis dataKey="time" label={{ value: "Time Periods", position: "insideBottom", dy: 10 }} />
                            <YAxis domain={[700, 1200]} label={{ value: "Price (USD)", angle: -90, position: "insideLeft" }} />
                            <Tooltip />
                            <Legend />
                            {marketplaces.map((m, index) => (
                              <Line key={m} type="linear" dataKey={m} stroke={colors[index]} strokeWidth={2} dot={false} />
                            ))}
                          </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-blue-200 p-4 rounded-lg">
                <div className="p-6 space-y-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-center mb-4">Samsung Price Trends Across Marketplaces</h2>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={samsungData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                            <XAxis dataKey="time" label={{ value: "Time Periods", position: "insideBottom", dy: 10 }} />
                            <YAxis domain={[700, 1200]} label={{ value: "Price (USD)", angle: -90, position: "insideLeft" }} />
                            <Tooltip />
                            <Legend />
                            {marketplaces.map((m, index) => (
                              <Line key={m} type="linear" dataKey={m} stroke={colors[index]} strokeWidth={2} dot={false} />
                            ))}
                          </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
        <button className="mt-4 bg-pink-200 px-6 py-2 rounded-full block mx-auto">Start analyzing trends</button>
      </div>
    
    </div>
  );
}
