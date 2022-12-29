import useWeather from "../hooks/UseWeather"
import Result from "./Result"
import WeatherForm from "./WeatherForm"

const WeatherApp = () => {
  const { result } = useWeather()

  return (
    <>
      <main className="two-columns">
        <WeatherForm />

        {result?.name && <Result />}
      </main>
    </>
  )
}

export default WeatherApp