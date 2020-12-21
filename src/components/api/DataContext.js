import React, { createContext, useEffect, useState } from 'react';
import { fetchDailyData } from './DailyData'
import { fetchCountries } from '../api/fetchCountries'

export const DataContext = createContext([]);



export const DataProvider = ({ children }) => {

  const [dailyData, setDailyData] = useState({});
  const [countries, setCountries] = useState([])



  useEffect(() => {

    const fetchData = async () => {



      const initialDailyData = await fetchDailyData()
      setCountries(await fetchCountries())
      setDailyData(initialDailyData)
    }

    fetchData()

  }, []);



  return (<DataContext.Provider value={{

    dailyData,
    countries: countries

  }}>
    {children}
  </DataContext.Provider>
  );

}




