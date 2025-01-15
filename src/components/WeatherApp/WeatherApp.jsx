import DayCard from "../DayCard/DayCard";
import styles from "./WeatherApp.module.css";

export default function WeatherApp({ error, forecast }) {
  return (
    <div className={styles.app}>
      {error && <p className={styles.error}>{error}</p>}

      {forecast && (
        <div className={styles.forecastContainer}>
          {forecast.list
            .filter((_, index) => index % 8 === 0)
            .map((item, index) => (
              <DayCard key={index} item={item} />
            ))}
        </div>
      )}
    </div>
  );
}
