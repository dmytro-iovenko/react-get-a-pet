import { useContext } from 'react';
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { PetFinderContext } from '../../contexts/PetFinderContext';

function Title() {
    const { updateSearchParameters, searchParameters, suggestions, startSearch } = useContext(PetFinderContext);

    return (
        <section id='title'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xxl={8} xl={10} className='text-center'>
                        <div className='title-heading mt-5 pt-4'>
                            <h1>There's a pet near you that needs some love</h1>
                            <p className='text-muted'>Find pets in and around your area that need a new home. Enter in some details,
                                press search, and start a new chapter in your life.</p>
                            <div className='text-center search-form'>
                                <FormControl
                                    type='text'
                                    className='rounded-pill'
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
                                <Button as={Link} to='/petfinder' variant='primary' className='rounded-pill' id='search-button' onClick={startSearch}>
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