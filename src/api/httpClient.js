import axios from 'axios';


// Http Client using Axios.
const get = (url) => {
    return axios(url)
}

// const get = (url) => {
    // return axios(url, { headers: {
    // "Access-Control-Allow-Origin": "*", 
    // "Access-Control-Allow-Methods": "GET",
    // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"} } )
// }

const HttpClient = {
    get
}

export {HttpClient}