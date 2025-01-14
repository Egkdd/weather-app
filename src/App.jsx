import './App.css'
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import WeatherApp from './components/WeatherApp/WeatherApp.jsx';

export default function App() {

  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const fetchForecast = async () => {
    try {
      setError(null);
      const API_KEY = "e3fd6e4ecef0d5691fbc0c38ef65a5e9";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecast(response.data);
    } catch (error) {
      setForecast(null);
      setError("City not found. Please try again");
    }
  };
  return (
    <>
      <Header city={city} setCity={setCity} fetchForecast={fetchForecast} />
      <WeatherApp error={error} forecast={forecast}/>
    </>
  )
}
