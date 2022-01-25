import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';


function AnimalInfo() {
    const { animalInfo, hideAnimalInfo } = useContext(PetFinderContext);

    return (
        <>
            {animalInfo &&
                <Modal show centered scrollable size='lg' fullscreen='md-down' id='pf-animal-modal' onHide={hideAnimalInfo}>
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
                        <div className="animal-details">
                            <h2>Meet {animalInfo.name}</h2>
                            <p>{(animalInfo.breeds.mixed) ? 'Mixed Breed' : animalInfo.breeds.primary} &#65121; {animalInfo.contact.address.city}, {animalInfo.contact.address.state}</p>
                            <p>{animalInfo.age} &#65121; {animalInfo.gender} &#65121; {animalInfo.size} &#65121; {Object.values(animalInfo.colors).filter(color => color !== null).join(', ')}</p>
                            <h4>About</h4>
                            <p>{animalInfo.description}</p>
                            <h4>Characteristics</h4>
                            <p>{animalInfo.tags.join(', ')}</p>
                            <h4>Good in a home with</h4>
                            <p>{Object.entries(animalInfo.environment).filter((env) => env[1] === true).map((env) => env[0]).join(', ')}</p>
                            <h4>Prefers a home without</h4>
                            <p>{Object.entries(animalInfo.environment).filter((env) => env[1] === false).map((env) => env[0]).join(', ')}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button href={animalInfo.url} variant='primary' target='_blank' rel='noreferrer'>More About {animalInfo.name} on Petfinder</Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    );
}

export default AnimalInfo;