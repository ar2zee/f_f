import React from "react";
import Moment from 'react-moment';


const Forecast = props => {
    return (
        <React.Fragment>
            { 
			props.forecastStartTime_1 &&<p className="airportInfo__key">Start Time 1:  
			<span className="airportInfo__value"> <Moment format="HH:mm">{ props.forecastStartTime_1}</Moment></span> </p> 
            }
            { 
                props.forecastWindSpeed_1 &&<p className="airportInfo__key">Wind Speed 1: 
                <span className="airportInfo__value"> { props.forecastWindSpeed_1} Mph</span> </p> 
            }

            { 
                props.forecastWindDirection_1 &&<p className="airportInfo__key">Wind Direaction 1: 
                <span className="airportInfo__value"> { props.forecastWindDirection_1}°</span> </p> 
            }
            
            {/* FORECAST 2 */}
            { 
                props.forecastStartTime_2 &&<p className="airportInfo__key">Start Time 2: 
                <span className="airportInfo__value"> <Moment format="HH:mm">{ props.forecastStartTime_2}</Moment> </span> </p> 
            }
            { 
                props.forecastWindSpeed_2 &&<p className="airportInfo__key">Wind Speed 2: 
                <span className="airportInfo__value"> { props.forecastWindSpeed_2} Mph</span> </p> 
            }

            { 
                props.forecastWindDirection_2 &&<p className="airportInfo__key">Wind Direaction 2: 
                <span className="airportInfo__value"> { props.forecastWindDirection_2}°</span> </p> 
            }
        </React.Fragment>
    )
}
    


export default Forecast;