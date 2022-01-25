import { useContext } from 'react';
import { Button, Col, Container, FormControl, FormSelect, InputGroup, Row } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';

function SearchBar() {
    const { searchParameters, updateSearchParameters, suggestions, startSearch } = useContext(PetFinderContext);

    return (
        <section id='pf-search'>

            <Container fluid>
                <Row>
                    <Col>
                        <InputGroup className='mt-5 pt-5'>
                            <FormSelect 
                                id='type' 
                                onChange={updateSearchParameters}
                                defaultValue={searchParameters.type}
                            >
                                <option value=''>Category...</option>
                                <option value='dog'>Dogs</option>
                                <option value='cat'>Cats</option>
                                <option value='rabbit'>Rabbits</option>
                                <option value='small-furry'>Small & Furry</option>
                                <option value='horse'>Horses</option>
                                <option value='bird'>Birds</option>
                                <option value='scales-fins-other'>Scales, Fins, & Other</option>
                                <option value='barnyard'>Barnyard</option>
                            </FormSelect>
                            <FormSelect 
                                id='distance'
                                onChange={updateSearchParameters}
                                defaultValue={searchParameters.distance}
                            >
                                <option value=''>Distance...</option>
                                <option value='10'>10 miles</option>
                                <option value='25'>25 miles</option>
                                <option value='50'>50 miles</option>
                                <option value='100'>100 miles</option>
                                <option value='500'>Anywhere</option>
                            </FormSelect>
                            <FormControl
                                type='text'
                                list='locationOptions'
                                id='location'
                                placeholder='Enter City, State or ZIP'
                                autoComplete='off'
                                onChange={updateSearchParameters}
                                value={searchParameters.location}
                            />
                            <datalist id='locationOptions'>
                                {suggestions.map(
                                    // prevent displaying a suggestion if it equals to the input value
                                    (option, index) => option.display_name !== searchParameters.location && <option value={option.display_name} key={index} />
                                )}
                            </datalist>
                            <Button variant='outline-secondary' id='pf-search-btn' onClick={startSearch}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SearchBar;