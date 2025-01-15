import styles from "./Header.module.css";

export default function Header({
  city,
  setCity,
  fetchForecast,
  handleGeolocation,
}) {
  return (
    <header>
      <h1>5-Day Weather Forecast</h1>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchForecast}>Search</button>
        <button onClick={handleGeolocation}>Use my location</button>
      </div>
    </header>
  );
}
