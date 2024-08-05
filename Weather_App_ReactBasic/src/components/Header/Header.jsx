import { NavLink } from "react-router-dom"
import "./Header.css"
import companyLogo from "/public/assets/companyLogo.png"

const Header = () => {
  return (
    <header>
        <div className='companyName'>
        <p>Weather App</p>
        <div className='companylogoWrapper'>
          <img src={companyLogo} alt='companyLogo'/>
        </div>
      </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active">
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/WeatherToday" activeclassname="active">
                    Weather Today
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/WeekForecast" activeclassname="active">
                    Week Forecast
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
