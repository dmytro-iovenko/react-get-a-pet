import axios from 'axios';

const baseURL = 'https://www.petfinder.com/v2/';

function getAxios(endPoint) {
    return axios.get(baseURL + endPoint)
        .then(response => response.data)
        .catch(error => console.error(error));
}

export function getLocations(query, latitude, longitude) {
    return getAxios(`geography/search/?q=${query}&lat=${latitude}&lng=${longitude}`);
}



// function to get an access token
// https://www.petfinder.com/developers/v2/docs/#using-the-api
// const getAccessToken = () => {
//     // check if an access token exists and has not expired 
//     if (window.sessionStorage.getItem('access_token') !== null
//         && window.sessionStorage.getItem('expires_in') !== null
//         && Number(window.sessionStorage.getItem('expires_in')) > Date.now()
//     ) {
//         // return the existing access token
//         return window.sessionStorage.getItem('access_token');
//     }

//     const url = 'https://api.petfinder.com/v2/oauth2/token';

//     const options = {
//         method: 'POST',
//         headers: new Headers({ 'content-type': 'application/x-www-form-urlencoded' }),
//         body: new URLSearchParams({
//             grant_type: 'client_credentials',
//             client_id: 'C7dIlLjDpzyBin3bfbhyCZ70g4NOrJyrSQ1Jk3DhdypHpgLsxC',
//             client_secret: 'KUeWq5mspfVrt6dXS1g4xafb1z373SCJiDETZfEr'
//         })
//     }
//     // fetch response from server
//     return fetch(url, options)
//         // transform response to object
//         .then(response => response.json())
//         .then((token) => {
//             window.sessionStorage.setItem('expires_in', Date.now() + token.expires_in * 1000);
//             window.sessionStorage.setItem('access_token', token.access_token);
//             return token.access_token;
//         })
// }