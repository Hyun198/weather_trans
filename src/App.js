import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [date, setDate] = useState([]);
  const [temps, setTemps] = useState([]);

  const getData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=37.617396&lon=126.703532&appid=2d9656e12a5cfa0fd6b7cbebd84d6e23`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    //시간 계산
    const times = data.list.map(item => item.dt_txt);
    const sixAmDate = times.filter(item => item.endsWith("06:00:00"));
    const temps = [];
    //날씨 데이터
    sixAmDate.map(dateTime => {
      const weather_data = data.list.find(item => item.dt_txt === dateTime);
      const temp = weather_data.main.temp;
      temps.push(temp);
    });
    setTemps(temps);



    //날짜 년-월-일 시간
    let sixAmDateValues = sixAmDate.map(item => (item.split(" ")[0].split("-")));
    const formattedDates = [];
    sixAmDateValues.forEach(dateArray => {
      const month = dateArray[1];
      const day = dateArray[2];
      const formattedDate = `${month}/${day}`;
      formattedDates.push(formattedDate);
    });

    setDate(formattedDates);


  }

  useEffect(() => {
    getData();
  }, [])


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
            <span className="title">Rain</span>
            <span className="value">4%</span>
          </div>
          <div>
            <span className="title">Humidity</span>
            <span className="value">%</span>
          </div>
          <div>
            <span className="title">Wind</span>
            <span className="value">5 km/h</span>
          </div>


          <ul className='days-list'>
            {date.map((dateItem, index) => (
              <li key={index}>
                {index === 0 && <i className='bx bxs-cloud'></i>}
                {index === 1 && <i className='bx bx-cloud-rain'></i>}
                {index === 2 && <i className='bx bx-cloud-snow'></i>}
                {index >= 3 && <i className='bx bx-cloud-drizzle'></i>}
                <span>{dateItem}</span>
                <span className='day-temp'>{temps[index]} ℃</span>
              </li>
            ))}
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
