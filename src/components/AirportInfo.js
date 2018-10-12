import React from "react";

import Weather from './Weather/Weather';
import Forecast from './Forecast/Forecast';
import Information from './Information/Information';
import Error from './Error';

const AirportInfo = props => {

	return (
	<div className="airportInfo__info">
		{/* ERROR */}
			<Error errors={props.errors}/>
		{/* AIRPORT INFO */}
			<Information identifier={props.identifier}
					name={props.name}
					runways={props.runways}
					latitude={props.latitude}
					longitude={props.longitude}/>
		{/* AIRPORT Weather */}
			<Weather temp={props.temp}
				relativeHumidity={props.relativeHumidity}
				cloudCoverage={props.cloudCoverage}
				visibilitys={props.visibilitys}
				windSpeed={props.windSpeed}
				windDirection={props.windDirection}/>
		{/* AIRPORT Forecast */}
			<Forecast forecastStartTime_1={props.forecastStartTime_1}
				forecastWindSpeed_1={props.forecastWindSpeed_1}
				forecastWindDirection_1={props.forecastWindDirection_1}
				forecastStartTime_2={props.forecastStartTime_2}
				forecastWindSpeed_2={props.forecastWindSpeed_2}
				forecastWindDirection_2={props.forecastWindDirection_2}
		/>
	</div>
	)
}

export default AirportInfo;