import {HttpClient} from './httpClient' 

const API = 'https://qa.foreflight.com'
const AIRPORT_DATA_API = `${API}/airports`
const AIRPORTS_WEATHER_API = `${API}/weather/report`

export const getAirportsData = (airportIcao) => {
    return HttpClient.get(`${AIRPORT_DATA_API}/${airportIcao}`)
}

export const getAirportWeather = (airportIcao) => {
    return HttpClient.get(`${AIRPORTS_WEATHER_API}/${airportIcao}`)
}



