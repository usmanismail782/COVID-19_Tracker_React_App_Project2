import React, { } from 'react'
import Cards from './components/cards/Cards';
import Charts from './components/charts/Charts';
import { DataProvider } from './components/api/DataContext'
import image from './images/covid19-logo.png';
import './App.css'





function App() {


  return (

    <DataProvider>
      <div className="container">
        <img className='image' src={image} alt="COVID-19" />
        <Cards />

        <Charts />



      </div>
    </DataProvider>
  )


}

export default App;
