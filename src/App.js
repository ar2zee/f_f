import React from "react";

import Titles from "./components/Title";
import Form from "./components/Form";
import AirportInfo from "./components/AirportInfo";
import { AirportsAPI } from './api/AirportsAPI';


class App extends React.Component {
  
	state = {
		identifier: undefined,
		name: undefined,
		runways: undefined,
		latitude: undefined,
		longitude: undefined,
		temp: undefined,
		relativeHumidity: undefined,
		cloudCoverage: undefined,
		visibility: undefined,
		windSpeed: undefined,
		windDirection: undefined,
		forecastStartTime_1: undefined,
		forecastWindSpeed_1: undefined,
		forecastWindDirection_1: undefined,
		forecastStartTime_2: undefined,
		forecastWindSpeed_2: undefined,
		forecastWindDirection_2: undefined,
		error: undefined
  }
  
	getAirportData = async (e) => {
		e.preventDefault();
    	const identifier = e.target.elements.identifier.value;

		const AirportInfoData = await AirportsAPI.getAirportsData(identifier);
		const AirportWeatherData = await AirportsAPI.getAirportWeather(identifier);
	
	    const {icao, name, runways, latitude, longitude} = AirportInfoData.data.airport.results;
		const {tempC, relativeHumidity, cloudLayers, visibility, wind} = AirportWeatherData.data.report.conditions;
		const forecast_1 = AirportWeatherData.data.report.forecast.conditions[1];
		const forecast_2 = AirportWeatherData.data.report.forecast.conditions[2];

	
		const cloudLayersArray = cloudLayers.map(element => element)
		const coverageValueFromCloudLayersArray = cloudLayersArray.reduce((prev, current) => (prev.altitudeFt > current.altitudeFt) ? prev : current);
		if (identifier) {
		this.setState({
			identifier: icao,
			name: name,
			runways: runways,
			latitude: latitude,
			longitude: longitude,
			temp: (tempC * 9/5) + 32,
			relativeHumidity: relativeHumidity ,
			cloudCoverage: coverageValueFromCloudLayersArray.coverage,
			visibility: visibility.distanceSm ,
			windSpeed: (wind.speedKts * 1.15077945).toFixed(3),
			windDirection: wind.direction,
			forecastStartTime_1: forecast_1.period.dateStart,
			forecastStartTime_2: forecast_2.period.dateStart,
			forecastWindSpeed_1: (forecast_1.wind.speedKts * 1.15077945).toFixed(3),
			forecastWindSpeed_2: (forecast_2.wind.speedKts * 1.15077945).toFixed(3),
			forecastWindDirection_1: forecast_1.wind.direction,
			forecastWindDirection_2: forecast_2.wind.direction,
			error: ''
			});
		} else {
			this.setState({
			identifier: undefined,
			name: undefined,
			runways: undefined,
			latitude: undefined,
			longitude: undefined,
			temp: undefined,
			relativeHumidity: undefined,
			cloudCoverage: undefined,
			visibility: undefined,
			windSpeed: undefined,
			windDirection: undefined,
			forecastStartTime_1: undefined,
			forecastWindSpeed_1: undefined,
			forecastWindDirection_1: undefined,
			forecastStartTime_2: undefined,
			forecastWindSpeed_2: undefined,
			forecastWindDirection_2: undefined,	
			error: 'Please Enter the Value.'
			});
		}
	}
	render() {
		return(
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
										
								</div>
								<div className="col-xs-7 form-container">
									<Form getAirportData={this.getAirportData}/>
									<AirportInfo 
									error={this.state.error}
									identifier={this.state.identifier}
									name={this.state.name}
									runways={this.state.runways}
									latitude={this.state.latitude}
									longitude={this.state.longitude}
									temp={this.state.temp}
									relativeHumidity={this.state.relativeHumidity}
									cloudCoverage={this.state.cloudCoverage}
									visibility={this.state.visibility}
									windSpeed={this.state.windSpeed}
									windDirection={this.state.windDirection}
									forecastStartTime_1={this.state.forecastStartTime_1}
									forecastStartTime_2={this.state.forecastStartTime_2}
									forecastWindSpeed_1={this.state.forecastWindSpeed_1}
									forecastWindSpeed_2={this.state.forecastWindSpeed_2}
									forecastWindDirection_1={this.state.forecastWindDirection_1}
									forecastWindDirection_2={this.state.forecastWindDirection_2}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};


				

export default App;