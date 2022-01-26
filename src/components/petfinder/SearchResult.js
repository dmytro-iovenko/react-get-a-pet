import { useContext, useEffect, useRef } from 'react';
import { Row } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';
import AnimalCard from './AnimalCard';

function SearchResult() {
    const { searchResults, searchParameters, userLocation, getNextPage } = useContext(PetFinderContext);
    const location = (userLocation && searchParameters.location === '') ? userLocation.city + ', ' + userLocation.state : searchParameters.location;
    const loader = useRef();

    // Infinite Scroll implementation based on
    // https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
    useEffect(() => 
        loader.current && new IntersectionObserver(entries => entries[0].isIntersecting && getNextPage()).observe(loader.current)
    , [searchResults]);

    return (
        <section id='pf-search-result'>
            {searchResults &&
                <>
                    <h2 id='pf-result-heading'>
                        We found {searchResults.pagination.total_count} pets near {location}
                    </h2>
                    <Row id='pf-animal-cards'>
                        {searchResults.animals.map(animal => <AnimalCard animal={animal} key={animal.id} />)}
                    </Row>
                    {'_links' in searchResults.pagination 
                        && 'next' in searchResults.pagination._links 
                        && 'href' in searchResults.pagination._links.next 
                        && <div ref={loader}/>
                    }
                </>
            }
        </section>
    );
}

export default SearchResult;