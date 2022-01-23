import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';

function Title() {

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
            && axios.get(`https://www.petfinder.com/v2/geography/search/?q=${searchParameters.location}&lat=${userLocation.latitude}&lng=${userLocation.longitude}`)
                .then((response) => setSuggestions(response.data.locations))
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

    return (
        <section id='title'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xxl={8} xl={10} className='text-center'>
                        <div className='title-heading mt-5 pt-4'>
                            <h1>There's a pet near you that needs some love</h1>
                            <p className='text-muted'>Find pets in and around your area that need a new home. Enter in some details,
                                press search, and start a
                                new chapter in your life.</p>
                            <div className='text-center search-form'>
                                <FormControl
                                    type='text'
                                    className='rounded-pill'
                                    list='locationOptions'
                                    id='search-location'
                                    placeholder='Enter City, State or ZIP'
                                    autoComplete='off'
                                    onChange={setSearchLocation}
                                    value={searchParameters.location}
                                />
                                <datalist id='locationOptions'>
                                    {suggestions.map(
                                        // prevent displaying a suggestion if it equals to the input value
                                        (option, index) => option.display_name !== searchParameters.location && <option value={option.display_name} key={index} />
                                    )}
                                </datalist>
                                <Button variant='primary' className='rounded-pill search-item' id='search-button'>
                                    <i className='fas fa-search' />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}

export default Title;