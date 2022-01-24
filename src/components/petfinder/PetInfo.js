import { Button, Modal } from 'react-bootstrap';

function PetInfo() {
    return (
        <Modal centered scrollable size='lg' fullscreen='md-down' id='pf-animal-modal'>
            <Modal.Header closeButton />
            <Modal.Body className='p-0'>
                {/* <!-- Carousel --> */}
                {/* <div id="pf-animal-photos" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">${photos}</div>
                <button class="carousel-control-prev" type="button" data-bs-target="#pf-animal-photos"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#pf-animal-photos"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
                </div> */}
                {/* <div class="animal-details">
                <h2>Meet ${animal.name}</h2>
                <p>${(animal.breeds.mixed) ? 'Mixed Breed' : animal.breeds.primary} &#65121; ${animal.contact.address.city}, ${animal.contact.address.state}</p>
                <p>${animal.age} &#65121; ${animal.gender} &#65121; ${animal.size} &#65121; ${Object.values(animal.colors).filter(color => color !== null).join(', ')}</p>
                <h4>About</h4>
                <p>${animal.description}</p>
                <h4>Characteristics</h4>
                <p>${animal.tags.join(', ')}</p>
                <h4>Good in a home with</h4>
                <p>${Object.entries(animal.environment).filter((env) => env[1] === true).map((env) => env[0]).join(', ')}</p>
                <h4>Prefers a home without</h4>
                <p>${Object.entries(animal.environment).filter((env) => env[1] === false).map((env) => env[0]).join(', ')}</p>
            </div> */}
            </Modal.Body>
            <Modal.Footer>
                <Button href='#' variant='primary'>More About ... on Petfinder</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PetInfo;