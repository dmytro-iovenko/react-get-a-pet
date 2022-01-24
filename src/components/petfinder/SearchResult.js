import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';
import AnimalCard from './AnimalCard';

function SearchResult() {
    const { searchResults } = useContext(PetFinderContext);
    return (
        <section id='pf-search-result'>
            <h2 id='pf-result-heading'>

            </h2>
            <Row id='pf-animal-cards'>
                {searchResults && searchResults.animals.map(animal => <AnimalCard animal={animal} key={animal.id} />)}
            </Row>
        </section>
    );
}

export default SearchResult;