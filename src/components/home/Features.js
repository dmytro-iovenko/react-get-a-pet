import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PetFinderContext } from "../../contexts/PetFinderContext";

function Features() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(prev => !prev);
    const { searchByType } = useContext(PetFinderContext);

    return (
        <section id='features'>
            <Row>
                <Col lg={4} className='feature-box'>
                    <Link to='petfinder'>
                        <div className='circle search-item' id='dog' onClick={searchByType}>
                            <i className='icon fas fa-dog fa-5x' />
                            <h2>Find a dog</h2>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} className='feature-box'>
                    <Link to='petfinder'>
                        <div className='circle search-item' id='cat' onClick={searchByType}>
                            <i className='icon fas fa-cat fa-5x' />
                            <h2>Find a cat</h2>
                        </div>
                    </Link>
                </Col>
                <Col lg={4} className='feature-box'>
                    <div className='circle dropup other-pets' id='other-pets' onClick={handleClick}>
                        <i className='icon fas fa-paw fa-5x' />
                        <h2>Find other pets</h2>
                        <button className='feature-dropdown text-muted other-pets' type='button' id='other-pets-dropdown'
                            data-bs-toggle='dropdown' data-bs-auto-close='false'>
                            <i className='fas fa-chevron-circle-down fa-2x' />
                        </button>
                        <ul className='dropdown-menu' style={{ display: isClicked ? 'block' : 'none' }} >
                            <Link to='petfinder'><li className='search-item' id='rabbit' onClick={searchByType}>Rabbits</li></Link>
                            <Link to='petfinder'><li className='search-item' id='small-furry' onClick={searchByType}>Small & Furry</li></Link>
                            <Link to='petfinder'><li className='search-item' id='horse' onClick={searchByType}>Horses</li></Link>
                            <Link to='petfinder'><li className='search-item' id='bird' onClick={searchByType}>Birds</li></Link>
                            <Link to='petfinder'><li className='search-item' id='scales-fins-other' onClick={searchByType}>Scales, Fins, & Other</li></Link>
                            <Link to='petfinder'><li className='search-item' id='barnyard' onClick={searchByType}>Barnyard</li></Link>
                        </ul>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Features;