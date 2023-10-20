'use client'

import styles from '@/styles/WeatherResume.module.css';
import SearchContainer from './SearchContainer';
import BackgroundContainer from './BackgroundContainer';
import SearchNavbar from '@/components/SearchNavbar'
import { useState } from 'react'
import { ThreeDots } from  'react-loader-spinner'



function WeatherResumeContainer({data, metric, updateLocation, handleGeolocation, isLoading}){
  
 const [navbarToggle, setNavbarToggle] =useState(false);

 console.log(isLoading)
 

  const handleNavbar=()=>{
    if(navbarToggle===false){
      setNavbarToggle(true)
    }
    else if(navbarToggle===true){
      setNavbarToggle(false)
    }
  }

    return(
        <div className={styles.background}>
            {navbarToggle===true?<SearchNavbar handleNavbar={handleNavbar} updateLocation={updateLocation}/>:null}
            <SearchContainer handleNavbar={handleNavbar} handleGeolocation={handleGeolocation} />
            <BackgroundContainer data={data} metric={metric} />            
        </div>
    )
}

export default WeatherResumeContainer