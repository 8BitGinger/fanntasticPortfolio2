import searchIcon from '../assets/images/search.png';
import weatherIcon from '../assets/images/weather/sunny.png';

const WeatherCard = () => {
  return (
    <div className="weather">
      <img src={weatherIcon} className="weather-icon" alt="weathericon" />
      <div className="search">
        <input type="text" placeholder="enter city name" spellCheck="false" />
        <button>
          <img className="spy" id="spy" src={searchIcon} />
        </button>
        <div className="error">
          <p>Invalid City</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
