import React from 'react'
import Form from './Form';
import Weather from './Weather';

export const Data = () => {

    return (
      <div>
        <Form/>
        <Weather/>
      </div>
    )
}

export default Data;

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     weatherInfo: {
  //       temp: null,
  //       city: null,
  //       country: null,
  //       pressure: null,
  //       sunset: null,
  //       message: 'Enter city name'
  //     }
  //   }
  // }

  // getWeather = async (city) => {
  //   try {
  //     const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
  //     const data = await response.json();
  //     this.setState({
  //       weatherInfo: {
  //         temp: data.main.temp,
  //         city: data.name,
  //         country: data.sys.country,
  //         pressure: data.main.pressure,
  //         sunset: data.sys.sunset,
  //         message: null
  //       }
  //     })
  //   } catch (e) {
  //     this.setState({
  //       weatherInfo: {
  //         message: 'Enter correct city name'
  //       }
  //     })
  //   }
  // }


