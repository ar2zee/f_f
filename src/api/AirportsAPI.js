import {HttpClient} from './httpClient' 

const API = 'https://qa.foreflight.com'
const AIRPORT_DATA_API = `${API}/airports`
const AIRPORTS_WEATHER_API = `${API}/weather/report`

export const getAirportsData = (airport) => {
    return HttpClient.get(`${AIRPORT_DATA_API}/${airport}`)
}

export const getAirportWeather = (airport) => {
    return HttpClient.get(`${AIRPORTS_WEATHER_API}/${airport}`)
}



