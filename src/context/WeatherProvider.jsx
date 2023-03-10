import axios from "axios";
import { useState, createContext } from "react";

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)

  const searchData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const requestWeather = async search => {
    setResult({})
    setLoading(true)
    setNoResults(false)

    try {
      const { city, country } = search
      const appId = import.meta.env.VITE_API_KEY

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`
      const { data } = await axios(url)

      const { lat, lon } = data[0]

      const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      const { data: weather } = await axios(urlWeather)

      setResult(weather)

    } catch (error) {
      setNoResults('No hay resultados')
    } finally {
      setLoading(false)
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchData,
        requestWeather,
        result,
        loading,
        noResults
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherProvider }

export default WeatherContext