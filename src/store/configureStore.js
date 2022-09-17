import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/weatherReducer";

// state = {
//     weather: {
//         weatherInfo: {
//             temp: null,
//             city: null,
//             country: null,
//             pressure: null,
//             sunset: null,
//         },
//         message: 'String'
//     }
// }

export const store = configureStore({
    reducer: {
        weather: weatherReducer
    }
})