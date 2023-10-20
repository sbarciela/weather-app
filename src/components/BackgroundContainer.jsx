import styles from '@/styles/BackgroundContainer.module.css'
import Image from 'next/image'
import imageplacehoder from '../assets/Shower.png'
import LocationOn from '../assets/location_on.svg'
import imageFilter from './imageFilter'




function BackgroundContainer({data, metric}){

//chosing the first result for today weather    
let todayForecast=data.list[0]

//main temp
let mainTemp=Math.ceil(todayForecast.main.temp)

//formatting date
let dateApi=todayForecast.dt_txt
let date = new Date(dateApi);
// request a weekday along with a long date
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
};
let finalDate=date.toLocaleDateString("en-US", options)



//function that filter between images based on id caming from the API
let imageApiId=todayForecast.weather[0].id
let mainImage=imageFilter(imageApiId)





    return(
        <>
            <div className={styles.background} style={{
                backgroundImage:'url(/Cloud-background.png)',
                height:"326px",
                backgroundRepeat: "no-repeat",  
            }}>

 
                <Image
                src={mainImage}
                alt="Picture of the author"
                className={[styles.mainImage, styles.shakeVertical].join(' ')}
                />         
           
            

            </div> 
            <div className={styles.mainTemperaute}>
                <span className={styles.temperature}>{mainTemp}</span>
                <span className={styles.celcius}>{metric?"°c":"°f"}</span>
                <div className={styles.stateWeather}>{todayForecast.weather[0].main}</div>
                <div className={styles.dateWeather}> <span>Today . </span> <span>{finalDate}</span></div>
                <div className={styles.dateWeather2}>
                    <LocationOn style={{fill:"#88869D"}}/>
                    <span>{data.city.name}</span>
                </div>
                
            </div>
        </>
)}
export default BackgroundContainer