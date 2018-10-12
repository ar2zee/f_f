import React, {Component} from "react";
import {connect} from 'react-redux';

import Titles from "../components/Title";
import Form from "../components/Form";
import AirportInfo from "../components/AirportInfo";
import {fetchAirportData, fetchAirportWeather, fetchAirportError, fetchAirportWeatherError} from '../store/actions/index';


class App extends Component {

	handleFormSubmit = (event) => {
		event.preventDefault();
		const identifier = event.target.elements.identifier.value;
		if(identifier.length === 0) {
            this.props.fetchAirportError('Please Enter Value');
            this.props.fetchAirportWeatherError('Please Enter Value');
		} else  {
			this.props.fetchAirportData(identifier);
            this.props.fetchAirportWeather(identifier);
		}
	}

	render() {
		return(
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-5 title-container">
                                <Titles />
                            </div>
                            <div className="col-xs-7 form-container">
                                <Form getAirportData={this.handleFormSubmit}/>
                                <AirportInfo 
                                errors={this.props.weather.errors}
                                identifier={this.props.information.identifier}
                                name={this.props.information.name}
                                runways={this.props.information.runways}
                                latitude={this.props.information.latitude}
                                longitude={this.props.information.longitude}
                                temp={this.props.weather.temp}
                                relativeHumidity={this.props.weather.relativeHumidity}
                                cloudCoverage={this.props.weather.cloudCoverage}
                                visibilitys={this.props.weather.visibilitys}
                                windSpeed={this.props.weather.windSpeed}
                                windDirection={this.props.weather.windDirection}
                                forecastStartTime_1={this.props.weather.forecastStartTime_1}
                                forecastStartTime_2={this.props.weather.forecastStartTime_2}
                                forecastWindSpeed_1={this.props.weather.forecastWindSpeed_1}
                                forecastWindSpeed_2={this.props.weather.forecastWindSpeed_2}
                                forecastWindDirection_1={this.props.weather.forecastWindDirection_1}
                                forecastWindDirection_2={this.props.weather.forecastWindDirection_2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
};

const MapStateToProps = state => {
	return {
		information: state.information,
        weather: state.weather
	}
}

const MapDispatchToProps = dispatch => ({
	fetchAirportData: (airportIcao) => dispatch(fetchAirportData(airportIcao)),
	fetchAirportWeather: (airportIcao) => dispatch(fetchAirportWeather(airportIcao)),
    fetchAirportError: (errors) => dispatch(fetchAirportError(errors)),
    fetchAirportWeatherError: (errors) => dispatch(fetchAirportWeatherError(errors)),
})

				

export default connect(MapStateToProps, MapDispatchToProps)(App);