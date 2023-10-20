import styles from '../styles/HighlightsContainer.module.css'
import Location from '../assets/navigation.svg'
import windDirection from './winDirection'

function HighlightsContainer ({data, metric}){

    let todayForecast=data.list[0]

   let wind=windDirection(todayForecast.wind.deg)
 

   let humidity=todayForecast.main.humidity
   let kms=todayForecast.visibility/1000
   



    return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.title}>Today's Highlights</div>

            <div className={styles.highlight}>
                <div className={styles.highlightTitle}>Wind Status</div>
                <div> 
                    <span className={styles.highlightValue}>{Math.floor(todayForecast.wind.speed)}</span>
                    <span className={styles.highlightValue2}>{metric?"mps":"mph"}</span>

                </div>
                <div className={styles.graphicIndicator}>
                    <div className={styles.target}>
                        <Location className={styles.icon} style={{fill:"#E7E7EB",transform:`rotate(${todayForecast.wind.deg}deg)` }} />
                    </div>
                    <span>{wind}</span>
                </div>
            </div>

            <div className={styles.highlight}>
                <div className={styles.highlightTitle}>Humidity</div>
                <div> 
                    <span className={styles.highlightValue}>{todayForecast.main.humidity}</span>
                    <span className={styles.highlightValue2}>%</span>

                </div>
                <div className={styles.graphicIndicator2}>
                    <div className={styles.humidityPercent}>
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div className={styles.humidityGraphic}>
                        <div className={styles.percentage} style={{width:`${todayForecast.main.humidity}%`}}></div>
                    </div>
                    <div className={styles.percentageSymbol}>%</div>
                </div>
            </div>

            <div className={[styles.highlight, styles.shortHighlight].join(' ')}>
                <div className={styles.highlightTitle}>Visibility</div>
                <div> 
                    <span className={styles.highlightValue}>{kms}</span>
                    <span className={styles.highlightValue2}> kms</span>
                </div>
            </div>

            <div className={[styles.highlight, styles.shortHighlight].join(' ')}>
                <div className={styles.highlightTitle}>Air pressure</div>
                <div> 
                    <span className={styles.highlightValue}>{todayForecast.main.pressure}</span>
                    <span className={styles.highlightValue2}> mb</span>
                </div>
            </div>

        </div>

        <div className={styles.footer}>
            <span>Created by <strong>Sebastián Barciela</strong> - <a href="https://github.com/sbarciela">github.com/sbarciela</a></span>
        </div>
    </div>

        )
}

export default HighlightsContainer