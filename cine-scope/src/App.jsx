import Navbar from "./assets/Components/Navbar/Navbar"
import "./App.css"
import Movies from "./Movies"
import LatestMovies from "./assets/Components/LatestMovies/LatestMovies"

function App() {
  return (
    <>
      <Navbar/>
      <Movies/>
      <LatestMovies/>
    </>
  )
}

export default App