import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';
import AnimalCard from './AnimalCard';

function SearchResult() {
    const { searchResults, searchParameters, userLocation } = useContext(PetFinderContext);
    const location = (userLocation && searchParameters.location === '') ? userLocation.city + ', ' + userLocation.state : searchParameters.location;

  

    return (
        <section id='pf-search-result'>
            <h2 id='pf-result-heading'>
                {searchResults &&  `We found ${searchResults.pagination.total_count} pets near ${location}` }
            </h2>
            <Row id='pf-animal-cards'>
                {searchResults && searchResults.animals.map(animal => <AnimalCard animal={animal} key={animal.id} />)}
            </Row>
        </section>
    );
}

export default SearchResult;