import React from "react";

const Weather = props => {
    return (
        <React.Fragment>
            { 
                props.temp && <p className="airportInfo__key">Temperature: 
                <span className="airportInfo__value"> { props.temp} F°</span> </p> 
            }
            { 
                props.relativeHumidity && <p className="airportInfo__key">Relative Humidity: 
                <span className="airportInfo__value"> { props.relativeHumidity}%</span> </p> 
            }
            { 
                props.cloudCoverage && <p className="airportInfo__key">Cloud Coverage: 
                <span className="airportInfo__value"> { props.cloudCoverage}</span> </p> 
            }
            { 
                props.visibilitys && <p className="airportInfo__key">Visibility: 
                <span className="airportInfo__value"> { props.visibilitys} Statute Miles</span> </p> 
            }
            { 
                props.windSpeed && <p className="airportInfo__key">Wind Speed: 
                <span className="airportInfo__value"> { props.windSpeed } Mph</span> </p> 
            }
            { 
                props.windDirection && <p className="airportInfo__key">Wind Direction: 
                <span className="airportInfo__value"> { props.windDirection}</span> </p> 
            }
        </React.Fragment>
    )
}
    


export default Weather;