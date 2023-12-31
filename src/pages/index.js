

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import WeatherResumeContainer from '@/components/WeatherResumeContainer'
import ForecastContainer from '@/components/ForecastContainer'
import HighlightsContainer from '@/components/HighlightsContainer'
import { useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import Loading from '@/components/Loading'


const fetcher = (...args) => fetch(...args).then(res => res.json())



export default function Home() {
  
  const[location,setLocation]=useState({latitude:-34.6075682, longitude:-58.4370894})
  const [celcius, setCelcius]=useState(true)
  
  let lat=location.latitude;
  let long=location.longitude
  let apiKey="2ba832c588192077c40d3a9f27d72607"
  
  //const { data, error, isLoading } = useSWR(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&&appid=${apiKey}&units=metric`, fetcher)
  //http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&&appid=${apiKey}&units=imperial
  const { data, error, isLoading } = useSWR(celcius===false ? `https://corsproxy.io/?http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&&appid=${apiKey}&units=imperial`:`https://corsproxy.io/?http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&&appid=${apiKey}&units=metric`, fetcher)
 


    function fetchFarenheit(){
               setCelcius(false)
    }

    function fetchCelcius(){
        setCelcius(true)
    }

    function updateLocation(latitude,longitude){
      setLocation({latitude,longitude})
      
    }

    function handleGeolocation(){
      if('geolocation' in navigator ) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
        })                
      }
    }
    

  useEffect(() => {
        if('geolocation' in navigator ) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
                
            })
            
                     
        }
    }, []);
    

  useEffect(() => {
    
        
  }, [location]);
    





  return (
    <>
      <Head>
        <title>Weather Report</title>
        <meta name="description" content="A weather aplication for the devchallenges.io proposal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data?
      <div className='weather-grid'>
        <WeatherResumeContainer
         data={data}
         metric={celcius}
         updateLocation={updateLocation}
         handleGeolocation={handleGeolocation}
         />
        <div className="grid-mainContent">
          <ForecastContainer data={data} metric={celcius} fetchFarenheit={fetchFarenheit} fetchCelcius={fetchCelcius} />
          <HighlightsContainer data={data} metric={celcius} />
        </div>  
      </div>:null
      }
      {isLoading?<Loading />
      :null}
           
      
      
      
    </>
  )
}
