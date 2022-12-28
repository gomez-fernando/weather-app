
const WeatherForm = () => {
  return (
    <div className="container">
      <form action="">
        <div className="field">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
          />
        </div>
        <div className="field">
          <label htmlFor="country">País</label>
          <select
            name=""
            id="country"
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