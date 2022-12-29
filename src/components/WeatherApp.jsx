import useWeather from "../hooks/UseWeather"
import Loading from "./Loading"
import NoResults from "./NoResults"
import Result from "./Result"
import WeatherForm from "./WeatherForm"

const WeatherApp = () => {
  const { result, loading, noResults } = useWeather()

  return (
    <>
      <main className="two-columns">
        <WeatherForm />

        {
          !!loading ? <Loading /> :

            result?.name ? <Result /> :
              noResults ? <NoResults/> :
              null
        }

      </main>
    </>
  )
}

export default WeatherApp