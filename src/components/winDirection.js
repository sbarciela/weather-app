
function windDirection(deg){
    let direction
    if(deg===0){
        direction="N"
    }
    else if(deg <=22.5){
        direction="NNE"
    }
    else if(deg <=45){
        direction="NE"
    }
    else if(deg <=67.5){
        direction="ENE"
    }
    else if(deg <=90){
        direction="E"
    }
    else if(deg <=112.5){
        direction="ESE"
    }
    else if(deg <=135){
        direction="SE"
    }
    else if(deg <=157.5){
        direction="SSE"
    }
    else if(deg <=180){
        direction="S"
    }
    else if(deg <=202.5){
        direction="SSW"
    }
    else if(deg <=225){
        direction="SW"
    }
    else if(deg <=247.5){
        direction="WSW"
    }
    else if(deg <=270){
        direction="NW"
    }
    else if(deg <=292.5){
        direction="WWW"
    }
    else if(deg <=315){
        direction="NW"
    }
    else if(deg <=337.5){
        direction="NNW"
    }
    else if(deg <=360){
        direction="N"
    }
    
    return direction
}

export default windDirection

