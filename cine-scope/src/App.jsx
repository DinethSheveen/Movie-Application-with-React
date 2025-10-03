import Navbar from "./assets/Components/Navbar/Navbar"
import "./App.css"
import Movies from "./Movies"
import Footer from "./assets/Components/Footer/Footer"
import Trending from "./assets/Components/TrendingMovies/Trending"

function App() {
  return (
    <>
      <Navbar/>
      <Movies/>
      <Trending/>
      <Footer/>
    </>
  )
}

export default App