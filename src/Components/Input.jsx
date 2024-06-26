import React from 'react'
import { useWeather } from '../Context/Weathercon';

const Input = () => {
    const weather = useWeather();
    
    return (
        <input className='input'
            placeholder="Search here........"
            value={weather.searchcity}
            onChange={(e)=>weather.setSearchCity(e.target.value)}
        />
    );
}

export default Input;

