import "./DayCard.css"

export default function WeatherCard({ item }) {
  return (
    <div className="forecast-card">
      <p className="date">
        {new Date(item.dt_txt).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
      <p className="description">{item.weather[0].description}</p>
      <p className="temp">{item.main.temp}°C</p>
      <div className="details">
        <p>Humidity: {item.main.humidity}%</p>
        <p>Wind: {item.wind.speed} m/s</p>
      </div>
    </div>
  );
}
