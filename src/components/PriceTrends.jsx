import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const iphoneData = [
  { time: 1, Uzum: 1130, Ozon: 1180, WB: 710, Temu: 700, "1688": 1080 },
  { time: 2, Uzum: 1200, Ozon: 1060, WB: 870, Temu: 770, "1688": 840 },
  { time: 3, Uzum: 980,  Ozon: 1180, WB: 810, Temu: 880, "1688": 740 },
  { time: 4, Uzum: 1120, Ozon: 710,  WB: 730, Temu: 1090, "1688": 940 },
  { time: 5, Uzum: 940,  Ozon: 800,  WB: 1050, Temu: 890, "1688": 790 },
  { time: 6, Uzum: 1180, Ozon: 990,  WB: 820, Temu: 780, "1688": 1040 },
  { time: 7, Uzum: 910,  Ozon: 1130, WB: 1030, Temu: 940, "1688": 1030 },
  { time: 8, Uzum: 1150, Ozon: 830,  WB: 830, Temu: 1090, "1688": 850 },
  { time: 9, Uzum: 890,  Ozon: 1180, WB: 1020, Temu: 1040, "1688": 1020 },
  { time: 10, Uzum: 860,  Ozon: 940,  WB: 890, Temu: 700, "1688": 970 },
  { time: 11, Uzum: 1100, Ozon: 740,  WB: 1030, Temu: 710, "1688": 860 },
  { time: 12, Uzum: 1040, Ozon: 1040, WB: 740, Temu: 890, "1688": 780 },
];

const samsungData = [
  {
      "1688": 1081,
      "time": 1,
      "Uzum": 1119,
      "Ozon": 858,
      "WB": 921,
      "Temu": 1089
  },
  {
      "1688": 1170,
      "time": 2,
      "Uzum": 874,
      "Ozon": 1171,
      "WB": 999,
      "Temu": 1082
  },
  {
      "1688": 747,
      "time": 3,
      "Uzum": 980,
      "Ozon": 943,
      "WB": 1070,
      "Temu": 970
  },
  {
      "1688": 840,
      "time": 4,
      "Uzum": 1121,
      "Ozon": 728,
      "WB": 1160,
      "Temu": 1160
  },
  {
      "1688": 822,
      "time": 5,
      "Uzum": 1012,
      "Ozon": 1176,
      "WB": 1072,
      "Temu": 1134
  },
  {
      "1688": 895,
      "time": 6,
      "Uzum": 990,
      "Ozon": 950,
      "WB": 895,
      "Temu": 869
  },
  {
      "1688": 934,
      "time": 7,
      "Uzum": 1098,
      "Ozon": 1079,
      "WB": 1042,
      "Temu": 792
  },
  {
      "1688": 1124,
      "time": 8,
      "Uzum": 1028,
      "Ozon": 1072,
      "WB": 963,
      "Temu": 844
  },
  {
      "1688": 1035,
      "time": 9,
      "Uzum": 1169,
      "Ozon": 1011,
      "WB": 818,
      "Temu": 1142
  },
  {
      "1688": 939,
      "time": 10,
      "Uzum": 1014,
      "Ozon": 901,
      "WB": 1101,
      "Temu": 1152
  },
  {
      "1688": 920,
      "time": 11,
      "Uzum": 873,
      "Ozon": 1011,
      "WB": 868,
      "Temu": 841
  },
  {
      "1688": 1118,
      "time": 12,
      "Uzum": 715,
      "Ozon": 890,
      "WB": 1157,
      "Temu": 874
  }
]


const marketplaces = ["Uzum", "Ozon", "WB", "Temu", "1688"];
const colors = ["#FFA500", "#FF4500", "#FF1493", "#00BFFF", "#8A2BE2"];

export default function PriceTrends() {
  return (
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
      
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">Samsung Price Trends Across Marketplaces</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={samsungData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <XAxis dataKey="time" label={{ value: "Time Periods", position: "insideBottom", dy: 10 }} />
            <YAxis domain={[500, 850]} label={{ value: "Price (USD)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            {marketplaces.map((m, index) => (
              <Line key={m} type="linear" dataKey={m} stroke={colors[index]} strokeWidth={2} dot={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
