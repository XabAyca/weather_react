import React from 'react';
import Loading from './Loading';
import DayWeather from './DayWeather';

const Weather = () => {
  const [data, setData] = React.useState("");
  const [noGeo, setNoGeo] = React.useState(false)
  const API_KEY3 = 'bb9b4cf73b5a4efa90973c24bc599198';
  const [selectedRadio, setSelectedRadio] = React.useState('')
  const towns = ["San Francisco","Libreville","Tokyo","Montréal"]

  const selectOff = () => {
    setSelectedRadio('');
    setData("")
  }

  const currentWeather = (latitude, longitude) => {
    let where = ""
    if (selectedRadio) {
      where = "city="+selectedRadio.split(' ').join('').toLowerCase()+`&key=${API_KEY3}`
    } else {
      where = `lat=${latitude}&lon=${longitude}&key=${API_KEY3}`
    }
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?${where}`)
    .then((response) => response.json())
    .then((response) => {
      setData(response)
    })
  }

  React.useEffect(
    () => {
      navigator.geolocation.getCurrentPosition((position) => {
        currentWeather(position.coords.latitude, position.coords.longitude);
      })
    },[selectedRadio]
  );
  
  return (
    <div>
      <h1>Voici la météo à 6 jours</h1>
      <h3>{data ? data.city_name : null}</h3>
      <div className="radios">
        {towns.map(radio => {
          return (
            <div key={radio}>
              <input
                type="radio"
                value={radio}
                id={radio}
                checked={radio === selectedRadio}
                onChange={(e) => {
                  setSelectedRadio(e.target.value);
                  setData("")
                }
                }>
              </input>
              <label htmlFor={radio}>{radio}</label>
            </div>
          )
        })}
      </div>
      {selectedRadio? <button className="selectOff" onClick={selectOff}>Annuler la selection</button> : null}
      <div id="weather">
        {data ? data.data.slice(0, 5).map(day => <DayWeather data={day} key={day.moon_phase} />) : <Loading type={"spinningBubbles"} color={"#B0E0E6"} />}
      </div>
    </div>
  )
}

export default Weather