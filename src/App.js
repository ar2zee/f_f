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
		relativeHumidity: undefined ,
		cloudCoverage: undefined ,
		visibility: undefined ,
		windSpeed: undefined ,
		windDirection: undefined ,
		error: undefined
  }
  
	getAirportData = async (e) => {
		e.preventDefault()
    	const identifier = e.target.elements.identifier.value;

		const AirportInfoData = await AirportsAPI.getAirportData(identifier);
		const AirportWeatherData = await AirportsAPI.getAirportWeather(identifier);

    // console.log(AirportInfoData);
    console.log(AirportWeatherData.data.report);
    const {icao, name, runways, latitude, longitude} = AirportInfoData.data.airport.results
    const {tempC, relativeHumidity, cloudLayers, visibility, wind} = AirportWeatherData.data.report.conditions
		if (identifier) {
		this.setState({
			identifier: icao,
			name: name,
			runways: runways,
			latitude: latitude,
			longitude: longitude,
			temp: (tempC * 9/5) + 32,
			relativeHumidity: relativeHumidity ,
			// cloudCoverage: undefined ,
			visibility: visibility.distanceSm ,
			windSpeed: (wind.speedKts * 1.15077945).toFixed(3),
			windDirection: wind.direction ,
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
			relativeHumidity: undefined ,
			cloudCoverage: undefined ,
			visibility: undefined ,
			windSpeed: undefined ,
			windDirection: undefined ,
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
									<Form getWeather={this.getAirportData}/>
									<AirportInfo 
									identifier={this.state.identifier}
									name={this.state.name}
									runways={this.state.runways}
									latitude={this.state.latitude}
									longitude={this.state.longitude}
									temp={this.state.temp}
									relativeHumidity={this.state.relativeHumidity}
									// cloudCoverage: undefined ,
									visibility={this.state.visibility}
									windSpeed={this.state.windSpeed}
									windDirection={this.state.windDirection}
									error={this.state.error}
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