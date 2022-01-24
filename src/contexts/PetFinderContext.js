import { createContext, useEffect, useState } from "react";
import { getLocations } from "../services/petfinder-api";

export const PetFinderContext = createContext();

export function PetFinderProvider(props) {
    const [userLocation, setUserLocation] = useState();
    const [searchParameters, setSearchParameters] = useState({
        location: '',
        distance: 100,
        type: ''
    });
    const [suggestions, setSuggestions] = useState([]);

    // update search location using controlled input
    const setSearchLocation = (event) => {
        setSearchParameters((prevState) => ({
            ...prevState,
            location: event.target.value
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
    }, [searchParameters.location, userLocation.latitude, userLocation.longitude]);

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

    return (
        <PetFinderContext.Provider value={{ setSearchLocation, searchParameters, suggestions }}>
            {props.children}
        </PetFinderContext.Provider>
    );
}
