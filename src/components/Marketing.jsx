import React from "react";

const strategies = [
  {
    title: "iPhone Marketing Strategies",
    points: [
      "Leverage the price trend data across marketplaces to dynamically adjust pricing for iPhone models.",
      "Offer tailored promotions and discounts to specific customer segments.",
      "Expand iPhone availability across key marketplaces to reach a wider audience.",
      "Ensure a seamless customer journey across online and offline touchpoints.",
      "Develop a robust loyalty program to incentivize repeat purchases and advocacy.",
      "Collaborate with influential content creators, tech enthusiasts, and opinion leaders.",
      "Continuously monitor and analyze market trends, customer behavior, and campaign performance metrics."
    ]
  },
  {
    title: "Samsung Marketing Strategies",
    points: [
      "Utilize the price trend data to position Samsung products competitively in the market.",
      "Develop targeted marketing campaigns and promotions to capitalize on seasonal demand patterns.",
      "Expand Samsung’s presence across leading e-commerce platforms.",
      "Emphasize Samsung’s unique features, design, and technological innovations to differentiate the brand.",
      "Promote the seamless integration of Samsung devices within the broader Samsung ecosystem.",
      "Analyze customer data to identify and target distinct segments with tailored marketing strategies.",
      "Strengthen the brand’s reputation for reliability and customer service by providing comprehensive aftermarket support."
    ]
  }
];

export default function Marketing() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Marketing Strategies</h2>
        {strategies.map((strategy, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{strategy.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {strategy.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}