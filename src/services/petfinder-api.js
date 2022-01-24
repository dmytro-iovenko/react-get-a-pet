import axios from 'axios';

function getAxios(endPoint) {
    const baseURL = 'https://www.petfinder.com/v2/';
    return axios.get(baseURL + endPoint)
        .then(response => response.data)
        .catch(error => console.error(error));
}

export function getLocations(query, latitude, longitude) {
    return getAxios(`geography/search/?q=${query}&lat=${latitude}&lng=${longitude}`);
}

function postAxios(endPoint, body, config) {
    const baseURL = 'https://api.petfinder.com/v2/';
    return axios.post(baseURL + endPoint, body, config)
        .then(response => response.data)
        .catch(error => console.log(error));
}


// function to get an access token
// https://www.petfinder.com/developers/v2/docs/#using-the-api
export function getAccessToken() {

    const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };

    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: 'C7dIlLjDpzyBin3bfbhyCZ70g4NOrJyrSQ1Jk3DhdypHpgLsxC',
        client_secret: 'KUeWq5mspfVrt6dXS1g4xafb1z373SCJiDETZfEr'
    });

    return postAxios('oauth2/token', body, config);
}

 
// function to perform search request on PetFinder.com
export function getAnimals(token, endPoint, params) {
    const baseURL = 'https://api.petfinder.com/v2/';

    const config = {
        headers: { 'Authorization': `Bearer ${token}` },
        params: params
    }
    return axios.get(baseURL + endPoint, config)
        .then(response => response.data)
        .catch(error => console.error(error));
}