'use client'
import styles from '../styles/SearchNavbar.module.css'
import Close from '../assets/close.svg'
import Search from '../assets/search.svg'
import Navigate from '../assets/navigate_next.svg'
import { useRef, useState } from "react";
import useSWR, { useSWRConfig } from 'swr'
import Loading from './Loading'

const fetcher = (...args) => fetch(...args).then(res => res.json())



function SearchNavbar({handleNavbar , updateLocation}){
    const [cityName, setCityName]=useState()
    
    let field=useRef();
    let apiKey="2ba832c588192077c40d3a9f27d72607"
    const { data, error, isLoading } = useSWR(cityName ? `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`:null, fetcher)

    function submitHandler(e){
        e.preventDefault()
        let cityName=field.current.value
        setCityName(cityName)
    }

    function update(value){
        //return updateLocation(latitud,longitud)
        console.log(value)
    }
    
  
  

    return (
        <div className={styles.container}>
            <div className={styles.close}  onClick={handleNavbar}>
                <Close style={{fill:"#E7E7EB"}} />
            </div>

            <form className={styles.form} onSubmit={submitHandler} >
                <div className={styles.inputContainer}>
                    <Search style={{fill:"#616475"}}/>
                    <input className={styles.input} type="text" placeholder='search location' ref={field} />         
                </div>
                <button  className={styles.searchButton}>Search</button>
            </form>
            {!data?null:
             <ul className={styles.resultsContainer}>
                {data.map((item)=>
                <li key={crypto.randomUUID()} className={styles.result} onClick={()=>updateLocation(item.lat, item.lon)}>
                    <span>{item.name}</span>
                    <span className={styles.country}>{item.state}</span>
                    <span className={styles.arrow}><Navigate /></span>
                 </li>
             )}
            </ul>
            }
            {isLoading?<Loading />:null}
           
        </div>
    )
}

export default SearchNavbar