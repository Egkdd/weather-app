import "./Header.css";

export default function Header({city, setCity, fetchForecast}) {

  return (
    <header>
      <h1>5-Day Weather Forecast</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchForecast}>Search</button>
      </div>
    </header>
  );
}
