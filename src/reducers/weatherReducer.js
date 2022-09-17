import { createSlice } from "@reduxjs/toolkit"

const defaultWeather = {
    message: 'Enter city name',
    weatherInfo: {}
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: defaultWeather,
    reducers: {
        putWeather(weather, action) {
            weather.message = null;
            const data = action.payload;
            weather.weatherInfo = {
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }
        },
        getMessage(message, action) {
            message.message = action.payload
        }
    }
})

export const { putWeather, getMessage } = weatherSlice.actions;
export default weatherSlice.reducer;

