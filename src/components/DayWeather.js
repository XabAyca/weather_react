import React from 'react';

const DayWeather = ({ data }) => {
  
  const weekDays =['dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']

  const month = (today) => {
    if(today.getMonth()+1 <10){
      return '0'+(today.getMonth()+1)
    }else{
      return (today.getMonth()+1)
    }
  }

  const dateTime= (date) =>{
    const today = new Date();
    let day = ""
    if (today.getDate() < 10) {
      day = "0"+today.getDate()
    } else {
      day = today.getDate()
    }
    const dateToday = today.getFullYear() + '-' + (month(today)) + '-' + day;
    if(date === dateToday){
      return "Aujourd'hui"
    }else{
      const numb = new Date(date).getDay() 
      return weekDays[numb]
    }
  }

  return (
    <div className='day'>
      <h3>{dateTime(data.datetime)}</h3>
      <div className='image'>
        <img src={"https://www.weatherbit.io/static/img/icons/"+data.weather.icon+".png"} alt='weather'></img>
      </div>
      <p>Temp : Min {data.min_temp} - Max {data.max_temp}</p>
      <p><i className="fas fa-wind"></i> : {data.wind_cdir_full} - {parseInt(data.wind_spd)} m/s</p>
    </div>
  )
}

export default DayWeather