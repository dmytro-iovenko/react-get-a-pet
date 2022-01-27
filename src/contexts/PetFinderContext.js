import { createContext, useEffect, useState } from 'react';
import { getLocations, getAccessToken, getAnimals, getMoreAnimals } from '../services/petfinder-api';

export const PetFinderContext = createContext();

export function PetFinderProvider(props) {
    // state to store the user's default location
    const [userLocation, setUserLocation] = useState();
    // state to store search parameters
    const [searchParameters, setSearchParameters] = useState({
        location: '',
        distance: '',
        type: ''
    });
    // state to store relevant location suggestions for user input
    const [suggestions, setSuggestions] = useState([]);
    // state to store a token to access Petfinder API
    const [token, setToken] = useState();
    // state for storing search results
    const [searchResults, setSearchResults] = useState();
    // state to store additional info about the selected animal
    const [animalInfo, setAnimalInfo] = useState();
    // state to indicate if the search has started
    const [isSearchStarted, setIsSearchStarted] = useState(false);
    // state to indicate if the next page data has loaded
    const [isGetNextPage, setIsGetNextPage] = useState(false);

    // trigger search start
    const startSearch = () => {
        setIsSearchStarted(true);
    }
    // function of obtaining initial data from the server according to the current search parameters
    useEffect(() => {
        // initiate data retrieval if 'isSearchStarted' state is true
        if (isSearchStarted) {
            // check if the token exists and has not expired
            if (token && token.expires_in > Date.now()) {
                // remove blank attributes from search parameters
                // src: https://stackoverflow.com/a/38340730
                const params = Object.fromEntries(Object.entries(searchParameters).filter(([_, v]) => v && v !== ''));
                // initialize default location
                const defaultLocation = (userLocation && 'city' in userLocation && 'state' in userLocation) ? { location: userLocation.city + ', ' + userLocation.state } : {};

                // fetch data from the server and save it as search results
                getAnimals(token.access_token, 'animals', { ...defaultLocation, ...params })
                    .then(data => setSearchResults(data))
                    // reset 'isSearchStarted' state
                    .finally(() => setIsSearchStarted(false));
            } else {
                // get access token asynchronously
                getAccessToken()
                    // update the value of 'expires_in' to the relevant timestamp
                    .then(data => ({ ...data, expires_in: Date.now() + data.expires_in * 1000 }))
                    .then(data => setToken((prev) => ({ ...prev, ...data })))
            }
        }
    }, [isSearchStarted, token])

    // trigger get next page data
    const getNextPage = () => {
        setIsGetNextPage(true);
    }

    // function to get next page data from the server
    useEffect(() => {
        // initiate data retrieval if 'isGetNextPage' state is true
        if (isGetNextPage) {
            // check if the token exists and has not expired
            if (token && token.expires_in > Date.now()) {
                // fetch data from the server and add it to search results
                getMoreAnimals(token.access_token, searchResults.pagination._links.next.href)
                    .then(data => setSearchResults(prev => ({ ...prev, animals: [...prev.animals, ...data.animals], pagination: data.pagination })))
                    // reset 'isGetNextPage' state
                    .finally(() => setIsGetNextPage(false));
            } else {
                // get access token asynchronously
                getAccessToken()
                    // update the value of 'expires_in' to the relevant timestamp
                    .then(data => ({ ...data, expires_in: Date.now() + data.expires_in * 1000 }))
                    .then(data => setToken((prev) => ({ ...prev, ...data })))
            }
        }
    }, [isGetNextPage, token])


    // update search parameters using controlled input
    const updateSearchParameters = (event) => {
        setSearchParameters((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    // get the list of location suggestions for user input
    useEffect(() => {
        // get suggestions when typing more than 2 characters
        searchParameters.location.length > 2
            // fetch request to get allowed locations from PetFinder.com
            && getLocations(searchParameters.location, userLocation.latitude, userLocation.longitude)
                // put 'locations' array from response data to 'suggestions' State
                .then(data => setSuggestions(data.locations))
    }, [searchParameters.location]);

    // define function in global scope to use outside React application:
    // https://stackoverflow.com/questions/55040641/call-react-component-function-from-javascript
    window.getUserLocation = (obj) => {
        setUserLocation(obj)
    };

    // append an external Geolocation Onetrust Script to the component:
    // https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/getUserLocation';
        script.async = true;
        document.body.appendChild(script);
        return (() => document.body.removeChild(script));
    }, []);

    // show the modal window with animal info
    const showAnimalInfo = (object) => {
        setAnimalInfo(object);
    }

    // hide the modal window with animal info
    const hideAnimalInfo = () => {
        setAnimalInfo();
    }
    // initialize search from home page when clicking on animal type
    const searchByType = event => {
        setSearchParameters({
            location: '',
            distance: '',
            type: event.target.id
        })
        startSearch();
    }

    return (
        <PetFinderContext.Provider value={{
            userLocation, searchParameters, updateSearchParameters, suggestions, searchResults, startSearch,
            animalInfo, showAnimalInfo, hideAnimalInfo, getNextPage, isGetNextPage, isSearchStarted, searchByType
        }}>
            {props.children}
        </PetFinderContext.Provider>
    );
}
