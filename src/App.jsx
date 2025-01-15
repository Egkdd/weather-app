import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import WeatherApp from "./components/WeatherApp/WeatherApp.jsx";
import "./App.module.css";

export default function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchForecast = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecast(response.data);
    } catch (error) {
      setForecast(null);
      setError("City not found. Please try again");
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            setCity(response.data.name);
          } catch (error) {
            console.error("Error fetching geolocation data:", error);
          }
        },
        () => {
          alert("Geolocation permission denied.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (city) {
      fetchForecast();
    }
  }, [city]);

  return (
    <>
      <Header
        city={city}
        setCity={setCity}
        fetchForecast={fetchForecast}
        handleGeolocation={handleGeolocation}
      />
      <WeatherApp error={error} forecast={forecast} />
    </>
  );
}
