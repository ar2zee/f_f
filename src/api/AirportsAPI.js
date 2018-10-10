import {HttpClient} from './httpClient' 

const API = 'https://qa.foreflight.com'
const AIRPORT_DATA_API = `${API}/airports`
const AIRPORTS_WEATHER_API = `${API}/weather/report`

const getAirportData = (airport) => {
    return HttpClient.get(`${AIRPORT_DATA_API}/${airport}`)
}

const getAirportWeather = (airport) => {
    return HttpClient.get(`${AIRPORTS_WEATHER_API}/${airport}`)
}

const AirportsAPI = { getAirportData, getAirportWeather}

export {AirportsAPI}

