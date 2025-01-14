import DayCard from "../WeatherCard/DayCard";
import "./WeatherApp.css";

export default function WeatherApp({error, forecast}) {
  
  return (
    <div className="app">
      {error && <p className="error">{error}</p>}

      {forecast && (
        <div className="forecast-container">
          {forecast.list
            .filter((_, index) => index % 8 === 0)
            .map((item, index) => (
              <DayCard key={index} item={item}/>
            ))}
        </div>
      )}
    </div>
  );
}
