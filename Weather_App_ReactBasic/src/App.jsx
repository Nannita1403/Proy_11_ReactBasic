
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import WeatherToday from './pages/WeatherToday/WeatherToday'
import WeekForecast from './pages/WeekForecast/WeekForecast'
import NotFound from './pages/NotFound/NotFound'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/WeatherToday" element={<WeatherToday/>}></Route>
        <Route path="/WeekForecast" element={<WeekForecast />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App