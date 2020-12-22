import React, { useState } from 'react'
import Cards from './components/cards/Cards';
import Charts from './components/charts/Charts';
import Countries from './components/countryPeaker/CountryPeaker'
import { DataProvider } from './components/api/DataContext'
import { fetchSelectedCountryData } from './components/api/SelectedCountryData'
import image from './images/covid19-logo.png';
import './App.css'





function App() {


  const [countryData, setCountryData] = useState({})
  const [countryName, setCountryName] = useState("")

  const handleCountryChange = async (country) => {

    setCountryData(await fetchSelectedCountryData(country))
    setCountryName(country);
    
  }



  return (

    <DataProvider>
      <div className="container">
        <img className='image' src={image} alt="COVID-19" />
        <Cards data= {countryData} />
        <Countries handleCountryChange={handleCountryChange} />
        <Charts data={countryData} country={countryName} handleCountryChange={handleCountryChange} />



      </div>
    </DataProvider>
  )


}

export default App;
