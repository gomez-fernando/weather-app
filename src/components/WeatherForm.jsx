import { useState } from "react"
import useWeather from "../hooks/UseWeather"

const WeatherForm = () => {
  const [alert, setAlert] = useState('')
  const {search, searchData, requestWeather} = useWeather()
  const {city, country} = search

  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(search).includes('')){
      setAlert('Todos los campos son obligatorios')
      return;
    }

    setAlert('')
    requestWeather(search)
  }

  return (
    <div className="container">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="field">
          <label htmlFor="country">País</label>
          <select
            name="country"
            id="country"
            onChange={searchData}
            value={country}
          >
            <option value="">Selecciona un país</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
            <option value="AR">Argentina</option>
            <option value="MX">México</option>
            <option value="EC">Ecuador</option>
            <option value="CR">Costa Rica</option>
          </select>
        </div>
        <input
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </div>
  )
}

export default WeatherForm