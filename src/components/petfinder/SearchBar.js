import { Button, Col, Container, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";

function SearchBar() {
    return (
        <section id="pf-search">

            <Container fluid>
                <Row>
                    <Col>
                        <InputGroup className="mt-5 pt-5">
                            <FormSelect id="pf-search-category">
                                <option value="" selected>Category...</option>
                                <option value="dog">Dogs</option>
                                <option value="cat">Cats</option>
                                <option value="rabbit">Rabbits</option>
                                <option value="small-furry">Small & Furry</option>
                                <option value="horse">Horses</option>
                                <option value="bird">Birds</option>
                                <option value="scales-fins-other">Scales, Fins, & Other</option>
                                <option value="barnyard">Barnyard</option>
                            </FormSelect>
                            <FormSelect id="pf-search-distance">
                                <option value="" selected>Distance...</option>
                                <option value="10">10 miles</option>
                                <option value="25">25 miles</option>
                                <option value="50">50 miles</option>
                                <option value="100">100 miles</option>
                                <option value="500">Anywhere</option>
                            </FormSelect>
                            <FormControl
                                type='text'
                                list='locationOptions'
                                id='pf-search-location'
                                placeholder='Enter City, State or ZIP'
                                autoComplete='off'
                                // onChange={setSearchLocation}
                                // value={searchParameters.location}
                            />
                            <datalist id="locationOptions"></datalist>
                            <Button variant='outline-secondary' id='pf-search-btn'>
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