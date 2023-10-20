
import Clear from '../assets/Clear.png'
import HeavyCloud from '../assets/HeavyCloud.png'
import HeavyRain from '../assets/HeavyRain.png'
import LightCloud from '../assets/LightCloud.png'
import LightRain from '../assets/LightRain.png'
import Shower from '../assets/Shower.png'
import Sleet from '../assets/Sleet.png'
import Snow from '../assets/Snow.png'
import Thunderstorm from '../assets/Thunderstorm.png'



function imageFilter(id){  
let mainImage
if(id >= 200 && id <=232){
    mainImage=Thunderstorm
}
else if(id >= 300 && id <=321){
    mainImage=Shower
}
else if(id >= 500 && id <=501){
    mainImage=LightRain
}
else if(id >= 502 && id <=531){
    mainImage=HeavyRain
}
else if(id == 600 ){
    mainImage=Sleet
}
else if(id >= 601 && id <=622){
    mainImage=Snow
}
else if(id == 800){
    mainImage=Clear
}
else if(id > 800 && id<=802){
    mainImage=LightCloud
}
else if(id >= 803 && id<=804){
    mainImage=HeavyCloud
}else{
    mainImage=LightCloud
}

return mainImage
}


export default imageFilter