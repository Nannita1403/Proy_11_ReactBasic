
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'
import WeatherTodayPage from './pages/WeatherTodayPage/WeatherTodayPage'
import WeekForecastPage from './pages/WeekForecastPage/WeekForecastPage'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/WeatherToday" element={<WeatherTodayPage/>}></Route>
        <Route path="/WeekForecast" element={<WeekForecastPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App