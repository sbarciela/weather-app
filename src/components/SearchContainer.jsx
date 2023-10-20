'use client'
import styles from '@/styles/WeatherResume.module.css'
import LocationIcon from '../assets/my_location.svg?url'


function SearchContainer({handleNavbar, handleGeolocation}){

  

    return(
        <div>
            <div className={styles.form}>
                <div className={styles.input} onClick={handleNavbar}>
                    <span>Search for places</span>
                </div>
                
                <div className={styles.elipse} onClick={handleGeolocation}>
                <LocationIcon style={{fill:"#E7E7EB"}}/>
                <div className={styles.elipseb}/>
                </div>
            </div>
            
        </div>
    )
}
export default SearchContainer