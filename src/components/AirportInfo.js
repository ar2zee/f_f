import React from "react";
import Moment from 'react-moment';

const AirportInfo = props => {
	return (
	<div className="airportInfo__info">
		{
		props.identifier && <p className="airportInfo__key">Identifier: 
		<span className="airportInfo__value"> { props.identifier } </span>
		</p> 
		}
		{ 
			props.name && <p className="airportInfo__key">Name: 
			<span className="airportInfo__value"> { props.name } </span>
			</p> 
		}
		{ 
			props.runways && <div className="airportInfo__key">Runways:  
			<ul>{props.runways.map(runway => (
				<li className="airportInfo__value" key={runway.name}>{runway.name}</li>
			))}</ul>
			</div>
		}
		{ 
			props.latitude && props.longitude &&<p className="airportInfo__key">Latitude/Longitude: 
			<span className="airportInfo__value"> { props.latitude}, <br/> {props.longitude }</span> </p> 
		}
			
		{ 
			props.temp &&<p className="airportInfo__key">Temperature: 
			<span className="airportInfo__value"> { props.temp} F°</span> </p> 
		}
		{ 
			props.relativeHumidity &&<p className="airportInfo__key">Relative Humidity: 
			<span className="airportInfo__value"> { props.relativeHumidity}%</span> </p> 
		}
		{ 
			props.cloudCoverage &&<p className="airportInfo__key">Cloud Coverage: 
			<span className="airportInfo__value"> { props.cloudCoverage}</span> </p> 
		}
		{ 
			props.visibility &&<p className="airportInfo__key">Visibility: 
			<span className="airportInfo__value"> { props.visibility} Statute Miles</span> </p> 
		}
		{ 
			props.windSpeed &&<p className="airportInfo__key">Wind Speed: 
			<span className="airportInfo__value"> { props.windSpeed } Mph</span> </p> 
		}
		{ 
			props.windDirection &&<p className="airportInfo__key">Wind Direction: 
			<span className="airportInfo__value"> { props.windDirection}</span> </p> 
		}

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
		
		{/*  */}
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


		{ 
			props.error && <p className="airportInfo__error"> { props.error }</p>
		}
	</div>
	)
}

export default AirportInfo;