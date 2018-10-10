import React from "react";

import Titles from "./components/Title";
import Form from "./components/Form";
import AirportInfo from "./components/AirportInfo";


class App extends React.Component {
  
	state = {
		identifier: undefined,
		name: undefined,
		runways: undefined,
		latitude: undefined,
		longitude: undefined,
		error: undefined
  }
  
	getAirportData = async (e) => {
		e.preventDefault()
    const identifier = e.target.elements.identifier.value;
    
    
		const api_call_data = await fetch(`https://qa.foreflight.com/airports/${identifier}`);
		const data_1 = await api_call_data.json();
		// const api_call_weather = await fetch(`https://qa.foreflight.com/weather/report/${identifier}`);
		// const data_2 = await api_call_weather.json();
    console.log(data_1);
    // const {icao, name, runways, latitude, longitude} = data_1.airport.results
		// if (identifier) {
		// this.setState({
		// 	identifier: icao,
		// 	name: name,
		// 	runways: runways,
		// 	latitude: latitude,
		// 	longitude: longitude,
		// 	error: ''
		// 	});
		// } else {
		// 	this.setState({
		// 	identifier: undefined,
		// 	name: undefined,
		// 	// runways: undefined,
		// 	latitude: undefined,
		// 	longitude: undefined,
		// 	error: 'Please Enter the Value.'
		// 	});
		// }
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