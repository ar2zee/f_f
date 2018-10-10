import React from "react";

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
			props.error && <p className="airportInfo__error"> { props.error }</p>
		}
	</div>
	)
}

export default AirportInfo;