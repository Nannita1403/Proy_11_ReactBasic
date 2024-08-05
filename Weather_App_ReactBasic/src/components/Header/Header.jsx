import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
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
