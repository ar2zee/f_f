import axios from 'axios';


// Http Client using Axios.
const get = (url) => {
    return axios(url)
}


/* headers does'nt work. Preflight failed */
// const get = (url) => {
//     return axios(url, { headers: {
//     "Access-Control-Allow-Origin": "*" }})
// }

const HttpClient = {
    get
}

export {HttpClient}