import Header from './components/Header'
import Particle from './components/Particle'
import WeatherApp from './components/WeatherApp'
import { WeatherProvider } from './context/WeatherProvider'

function App() {

  return (
    <>
      <Particle />
      <WeatherProvider>
        <Header/>
        <WeatherApp />
      </WeatherProvider>
    </>
  )
}

export default App
