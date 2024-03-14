
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className="left-info">
        <div className="pic-gradient"></div>

        <div className="today-info">
          <h2>Friday</h2>
          <span>14 March 2024</span>
          <i class='bx bx-current-location'>
            <span> Korea, KR</span></i>
        </div>

        <div className='today-weather'>
          <i class='bx bxs-sun'></i>
          <h1 className="weather-temp">
            9℃
          </h1>
          <h3>Sunny</h3>
        </div>

      </div>

      <div className='right-info'>
        <div className="day-info">
          <div>
            <span className="title">Precipitation</span>
            <span className="value">4%</span>
          </div>
          <div>
            <span className="title">Humidity</span>
            <span className="value">25%</span>
          </div>
          <div>
            <span className="title">Wind</span>
            <span className="value">5 km/h</span>
          </div>

          <ul className='days-list'>
            <li>
              <i class='bx bxs-cloud' ></i>
              <span>Sat</span>
              <span className='day-temp'>23℃</span>
            </li>
            <li>
              <i class='bx bx-cloud-rain' ></i>
              <span>Sun</span>
              <span className='day-temp'>24℃</span>
            </li>
            <li>
              <i class='bx bx-cloud-snow' ></i>
              <span>Mon</span>
              <span className='day-temp'>25℃</span>
            </li>
            <li>
              <i class='bx bx-cloud-drizzle' ></i>
              <span>Tue</span>
              <span className='day-temp'>26℃</span>
            </li>
          </ul>

          <div className="btn-container">
            <button className='loc-button'>Search Location</button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
