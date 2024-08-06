import React from 'react'
import './Thermometer.css'

const Thermometer = ({ minTemperature, maxTemperature, feelsLike }) => {
  return (
    <div className='thermometer'>
      <div className='maxTemp'></div>
      <div className='feelsLike'></div>
      <div className='minTemp'></div>
      <div className='temperature'>
        <span className='maxText'>
          Maxima: <em>{maxTemperature}</em> °C
        </span>
        <span className='feelsText'>
          S.Termica: <em>{feelsLike}</em> °C
        </span>
        <span className='minText'>
          Minima: <em>{minTemperature}</em> °C
        </span>
      </div>
    </div>
  )
}

export default Thermometer