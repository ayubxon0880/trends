import { Routes, Route } from "react-router-dom";
import GoogleTrends from "./components/GoogleTrends";
import PriceTrends from "./components/PriceTrends";
import NewsPage from "./components/NewsPage";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/Home";
import ContactUs from "./components/ContactUs";
import Settings from "./components/Settings";
import Marketing from "./components/Marketing";

const Home = () => <HomePage/>;
const Trends = () => <GoogleTrends/>;
const Analytics = () => <PriceTrends/>;
const Instructions = () => <h1 className="text-2xl">Instructions Page</h1>;
const Search = () => <h1 className="text-2xl">Your Searches</h1>; 
const News = () => <NewsPage/>;
const Contact = () => <ContactUs/>;

const App = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/search" element={<Search />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;



// Frontend codelarda bazi muammolar va structure bo'yicha muammolar , xatolar bo'lishi mumkin. Loiha backend dasturchi tarafidan yozilgan shu sababli frontend codelar zo'r emas.