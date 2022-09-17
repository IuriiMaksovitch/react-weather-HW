import { getMessage, putWeather } from "../reducers/weatherReducer"
import { api_key, base_url } from "../units/constants";


export const fetchWeatherAction = (city) => {
    return dispatch => {
        dispatch(getMessage('Pending...'));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then(data => dispatch(putWeather(data)))
        .catch(e => dispatch(getMessage('Enter correct city name')))
    }
}