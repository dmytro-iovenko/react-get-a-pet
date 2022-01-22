import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';

function Title() {
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
                                {/* <input type='text' className='form-control rounded-pill' list='locationOptions' id='search-location'
                                        placeholder='Enter City, State or ZIP' autoComplete='off'/>
                                        <datalist id='locationOptions'></datalist>
                                        <button className='btn btn-primary rounded-pill search-item' type='button' id='search-button'>
                                            <i className='fas fa-search'></i>
                                        </button> */}
                                <FormControl
                                    type='text'
                                    className='rounded-pill'
                                    list='locationOptions'
                                    id='search-location'
                                    placeholder='Enter City, State or ZIP'
                                    autoComplete='off'
                                />
                                <datalist id='locationOptions'></datalist>
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