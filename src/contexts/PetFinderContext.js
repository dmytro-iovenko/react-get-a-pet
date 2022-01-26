import { createContext, useEffect, useState } from 'react';
import { getLocations, getAccessToken, getAnimals, getMoreAnimals } from '../services/petfinder-api';

export const PetFinderContext = createContext();

export function PetFinderProvider(props) {
    const [userLocation, setUserLocation] = useState();
    const [searchParameters, setSearchParameters] = useState({
        location: '',
        distance: '',
        type: ''
    });
    const [suggestions, setSuggestions] = useState([]);
    const [token, setToken] = useState();
    const [searchResults, setSearchResults] = useState();
    const [isSearchStarted, setIsSearchStarted] = useState(false);
    const [isGetNextPage, setIsGetNextPage] = useState(false);

    const startSearch = () => {
        setIsSearchStarted(true);
    }
    useEffect(() => {
        if (isSearchStarted) {
            if (token && token.expires_in > Date.now()) {
                const params = Object.fromEntries(Object.entries(searchParameters).filter(([_, v]) => v && v !== ''));
                const defaultLocation = (userLocation && 'city' in userLocation && 'state' in userLocation) ? { location: userLocation.city + ', ' + userLocation.state } : {};

                getAnimals(token.access_token, 'animals', { ...defaultLocation, ...params })
                    .then(data => setSearchResults(data))
                    .finally(() => setIsSearchStarted(false));
            } else {
                getAccessToken()
                    .then(data => ({ ...data, expires_in: Date.now() + data.expires_in * 1000 }))
                    .then(data => setToken((prev) => ({ ...prev, ...data })))
            }
        }
    }, [isSearchStarted, token])

    const getNextPage = () => {
        setIsGetNextPage(true);
    }

    useEffect(() => {

        if (isGetNextPage) {
            if (token && token.expires_in > Date.now()) {
                getMoreAnimals(token.access_token, searchResults.pagination._links.next.href)
                    .then(data => setSearchResults(prev => ({ ...prev, animals: [...prev.animals, ...data.animals], pagination: data.pagination })))
                    .finally(() => setIsGetNextPage(false));
            } else {
                getAccessToken()
                    .then(data => ({ ...data, expires_in: Date.now() + data.expires_in * 1000 }))
                    .then(data => setToken((prev) => ({ ...prev, ...data })))
            }
        }
    }, [isGetNextPage, token])

    const updateSearchParameters = (event) => {
        setSearchParameters((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    // get the list of location suggestions for user input
    useEffect(() => {
        // get suggestions when input more than 2 characters
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


    const [animalInfo, setAnimalInfo] = useState();

    const showAnimalInfo = (object) => {
        setAnimalInfo(object);
    }
    const hideAnimalInfo = () => {
        setAnimalInfo();
    }

    return (
        <PetFinderContext.Provider value={{
            userLocation, searchParameters, updateSearchParameters, suggestions, searchResults, startSearch,
            animalInfo, showAnimalInfo, hideAnimalInfo, getNextPage, isGetNextPage, isSearchStarted
        }}>
            {props.children}
        </PetFinderContext.Provider>
    );
}
