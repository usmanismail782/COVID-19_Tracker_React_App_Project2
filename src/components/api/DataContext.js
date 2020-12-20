import React, { createContext, useEffect, useState } from 'react';
import { fetchGlobalData } from './index'
import { fetchDailyData } from './DailyData'

export const DataContext = createContext([]);



export const DataProvider = ({ children }) => {

  const [data, setData] = useState({});
  const [dailyData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {



      const fetchedData = await fetchGlobalData();
      const initialDailyData = await fetchDailyData();

      console.log(initialDailyData)

      setData(
        {
          confirmed: fetchedData.confirmed.value,
          recovered: fetchedData.recovered.value,
          deaths: fetchedData.deaths.value,
          lastUpdate: new Date(fetchedData.lastUpdate).toDateString()
        }


      )

    }

    fetchData()

  }, []);







  return (<DataContext.Provider value={{
    data,
    dailyData

  }}>
    {children}
  </DataContext.Provider>
  );

}




