import { Col, Row } from "react-bootstrap";

function Features() {
    return (
        <section id='features'>
            <Row className='text-muted'>
                <Col lg={4} className='feature-box'>
                    <div className='circle search-item' id='dog-feature' data-pf-type='dog'>
                        <i className='icon fas fa-dog fa-5x' />
                        <h2>Find a dog</h2>
                    </div>
                </Col>
                <Col lg={4} className='feature-box'>
                    <div className='circle search-item' id='cat-feature' data-pf-type='cat'>
                        <i className='icon fas fa-cat fa-5x' />
                        <h2>Find a cat</h2>
                    </div>
                </Col>
                <Col lg={4} className='feature-box'>
                    <div className='circle dropup other-pets' id='other-pets-feature'>
                        <i className='icon fas fa-paw fa-5x' />
                        <h2>Find other pets</h2>
                        <button className='feature-dropdown text-muted other-pets' type='button' id='other-pets-dropdown'
                            data-bs-toggle='dropdown' data-bs-auto-close='false'>
                            <i className='fas fa-chevron-circle-down fa-2x' />
                        </button>
                        <ul className='dropdown-menu'>
                            <li className='search-item' id='rabbit-feature' data-pf-type='rabbit'>Rabbits</li>
                            <li className='search-item' id='small-furry-feature' data-pf-type='small-furry'>Small & Furry</li>
                            <li className='search-item' id='horse-feature' data-pf-type='horse'>Horses</li>
                            <li className='search-item' id='bird-feature' data-pf-type='bird'>Birds</li>
                            <li className='search-item' id='scales-fins-other-feature' data-pf-type='scales-fins-other'>Scales, Fins, & Other</li>
                            <li className='search-item' id='barnyard-feature' data-pf-type='barnyard'>Barnyard</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={4} className='feature-box'>
                    <div className='circle dropup other-pets' id='other-pets-feature' style={{height:'80%', overflow:'hidden'}}>
                        {/* <i className='icon fas fa-paw fa-5x' />
                        <h2>Find other pets</h2> */}
                        <ul style={{height:'70%', overflowY:'auto'}}>
                            <li className='search-item' id='rabbit-feature' data-pf-type='rabbit'>Rabbits</li>
                            <li className='search-item' id='small-furry-feature' data-pf-type='small-furry'>Small & Furry</li>
                            <li className='search-item' id='horse-feature' data-pf-type='horse'>Horses</li>
                            <li className='search-item' id='bird-feature' data-pf-type='bird'>Birds</li>
                            <li className='search-item' id='scales-fins-other-feature' data-pf-type='scales-fins-other'>Scales, Fins, & Other</li>
                            <li className='search-item' id='barnyard-feature' data-pf-type='barnyard'>Barnyard</li>
                        </ul>
                        <button className='feature-dropdown text-muted other-pets' type='button' id='other-pets-dropdown'
                            data-bs-toggle='dropdown' data-bs-auto-close='false'>
                            <i className='fas fa-chevron-circle-down fa-2x' />
                        </button>
                        <ul className='dropdown-menu'>
                            <li className='search-item' id='rabbit-feature' data-pf-type='rabbit'>Rabbits</li>
                            <li className='search-item' id='small-furry-feature' data-pf-type='small-furry'>Small & Furry</li>
                            <li className='search-item' id='horse-feature' data-pf-type='horse'>Horses</li>
                            <li className='search-item' id='bird-feature' data-pf-type='bird'>Birds</li>
                            <li className='search-item' id='scales-fins-other-feature' data-pf-type='scales-fins-other'>Scales, Fins, & Other</li>
                            <li className='search-item' id='barnyard-feature' data-pf-type='barnyard'>Barnyard</li>
                        </ul>
                    </div>
                </Col>
            </Row>

        </section>
    );
}

export default Features;