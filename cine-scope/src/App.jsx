import "./App.css"
import axios from "axios"
import React, { useEffect } from 'react'

const API_KEY = "7c669c55";
const API_URL = "http://www.omdbapi.com/?apikey=7c669c55"

function App() {
  useEffect(()=>{
    const fetch = async()=>{
      const response = await axios.get(`${API_URL}&s=superman`)
      console.log(response.data.Search)
    }    

    fetch()
  },[])
  
  
  
  return (
    <div>App</div>
  )
}

export default App