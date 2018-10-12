import {HttpClient} from './httpClient' 

const API = 'https://qa.foreflight.com'
const AIRPORT_DATA_API = `${API}/airports` // icao, name , lat, long, runways
const AIRPORTS_WEATHER_API = `${API}/weather/report` // weather & foreacst

export const getAirportsData = (airportIcao) => {
    return HttpClient.get(`${AIRPORT_DATA_API}/${airportIcao}`)
}

// CORS, not working in browser without https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
export const getAirportWeather = (airportIcao) => {
    return HttpClient.get(`${AIRPORTS_WEATHER_API}/${airportIcao}`)
}



