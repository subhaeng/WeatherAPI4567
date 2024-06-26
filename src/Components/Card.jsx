import React from 'react';
import { useWeather } from '../Context/Weathercon';
const Card = () => {
  const weather = useWeather();
  return (
    <div className='card'>
      <img src={weather?.data?.current?.condition?.icon} />
      <h3>{weather?.data?.current?.temp_c}.C</h3>
      <h3>{weather?.data?.current?.temp_f}.F</h3>
      <h3>{weather?.data?.current?.wind_mph}.km/h</h3>
      <h4>{weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country},{weather.data?.location?.lat}{weather.data?.location?.localtime}</h4>
    </div>
  );
}

export default Card;