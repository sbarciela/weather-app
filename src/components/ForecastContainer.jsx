
import styles from '../styles/ForecastContainer.module.css'
import Image from 'next/image'
import imageplacehoder from '../assets/Shower.png'
import Forecast from './Forecast'


function ForecastContainer({data, metric, fetchFarenheit, fetchCelcius}){

    //function to filter just the midday timestamps
  
        let filtered=data.list.filter((item)=>item.dt_txt.includes("00:00:00"))

       
    


    return(
        <div className={styles.container}>

            {metric?
            <div className={styles.temperatureContainer}>
                <div onClick={fetchCelcius} className={[styles.active, styles.margin].join(' ')}>
                    <span onClick={fetchCelcius} >°C</span>
                </div>
                <span className={styles.inactive} onClick={fetchFarenheit}>°F</span>
            </div>:
            <div className={styles.temperatureContainer}>
                <div onClick={fetchCelcius} className={[styles.inactive, styles.margin].join(' ')} >
                    <span onClick={fetchCelcius}>°C</span>
                </div>
                <span className={styles.active} onClick={fetchFarenheit}>°F</span>
            </div>
            }

            {filtered.map((item)=><Forecast key={item.dt} data={...item} completeData={data} metric={metric}/>)}
            
            

            
        </div>
    )
}

export default ForecastContainer