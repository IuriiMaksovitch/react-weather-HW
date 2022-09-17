import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherAction } from '../actionFunctions/getWeatherAction';

export const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClickGetWeather = () => {
        dispatch(fetchWeatherAction(city))
        setCity('');
    }

    return (
        <div>
            <input
                onChange={(e) => setCity(e.target.value)}
                type='text'
                placeholder='City'
                value={city}
            />
            <button onClick={handleClickGetWeather}>Get weather</button>
        </div>
    )
}

export default Form