import React from "react";

const newsData = [
  {
    id: 1,
    title: "Breaking News: Market Hits Record Highs",
    image: "./image.png",
    date: "Feb 16, 2025",
  },
  {
    id: 2,
    title: "Technology Advancements in 2025",
    image: "https://picsum.photos/200/300",
    date: "Feb 15, 2025",
  },
  {
    id: 3,
    title: "Climate Change and Its Impact",
    image: "https://picsum.photos/200/300",
    date: "Feb 14, 2025",
  },
  {
    id: 4,
    title: "Climate Change and Its Impact",
    image: "https://picsum.photos/200/300",
    date: "Feb 14, 2025",
  },
  {
    id: 5,
    title: "Climate Change and Its Impact",
    image: "https://picsum.photos/200/300",
    date: "Feb 14, 2025",
  },
  {
    id: 6,
    title: "Climate Change and Its Impact",
    image: "https://picsum.photos/200/300",
    date: "Feb 14, 2025",
  },
  {
    id: 7,
    title: "Climate Change and Its Impact",
    image: "https://picsum.photos/200/300",
    date: "Feb 14, 2025",
  },
];

export default function NewsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <div className="w-64 bg-white p-4 shadow-lg hidden md:block">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">World</li>
          <li className="hover:text-blue-600 cursor-pointer">Technology</li>
          <li className="hover:text-blue-600 cursor-pointer">Business</li>
          <li className="hover:text-blue-600 cursor-pointer">Health</li>
          <li className="hover:text-blue-600 cursor-pointer">Entertainment</li>
        </ul>
      </div> */}
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-500 text-sm">{news.date}</p>
                <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
