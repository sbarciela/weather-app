import styles from '../styles/ForecastContainer.module.css'
import Image from 'next/image'
import imageplacehoder from '../assets/Shower.png'
import imageFilter from './imageFilter'

function Forecast({data, metric , completeData}){

//main data for this forecast
let main=data.main

//filtering all the information for this date, comparing this forecast with the global information to compile de data
let dateTxt=data.dt_txt
let day= dateTxt.slice(0,10)
let entireDayForecast=completeData.list.filter((item)=>item.dt_txt.includes(day))


//testing max and mins
const maxValueOfTemp = Math.max(...entireDayForecast.map(o => o.main.temp))
const minValueOfTemp = Math.min(...entireDayForecast.map(o => o.main.temp))





//formatting date 
let dateApi=data.dt_txt
let date = new Date(dateApi);
// request a weekday along with a long date
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
};
let finalDate=date.toLocaleDateString("en-US", options)

//function that filter between images based on id caming from the API
let imageApiId=data.weather[0].id
let mainImage=imageFilter(imageApiId)

let unit
if(metric==true){
    unit="°c"
}else{
    unit="°f"
}

return(
    <div className={styles.forecast}>

            <div className={styles.title}>{finalDate}</div>

            <Image
            src={mainImage}
            alt="Picture of the author"
            className={styles.mainImage}
            />

            <div className={styles.maxAndMin}>
                <span>{Math.ceil(maxValueOfTemp)}{unit}</span>
                <span style={{color:"#A09FB1"}}>{Math.floor(minValueOfTemp)}{unit}</span>
            </div>
    </div>
)
}

export default Forecast