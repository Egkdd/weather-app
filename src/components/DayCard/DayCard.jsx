import styles from "./DayCard.module.css";

export default function WeatherCard({ item }) {
  return (
    <div className={styles.forecastCard}>
      <p className={styles.date}>
        {new Date(item.dt_txt).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p className={styles.description}>{item.weather[0].description}</p>
      <p className={styles.temp}>{item.main.temp}°C</p>
      <div className={styles.details}>
        <p>Humidity: {item.main.humidity}%</p>
        <p>Wind: {item.wind.speed} m/s</p>
      </div>
    </div>
  );
}
