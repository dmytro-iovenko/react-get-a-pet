import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';
import AnimalInfoCarousel from './AnimalInfoCarousel';


function AnimalInfo() {
    const { animalInfo, hideAnimalInfo } = useContext(PetFinderContext);

    return (
        <>
            {animalInfo &&
                <Modal show centered scrollable size='lg' fullscreen='md-down' id='pf-animal-modal' onHide={hideAnimalInfo}>
                    <Modal.Header closeButton />
                    <Modal.Body className='p-0'>
                        {animalInfo.photos.length > 0 && <AnimalInfoCarousel photos={animalInfo.photos} />}
                        <div className="animal-details">
                            <h2>Meet {animalInfo.name}</h2>
                            <p>{(animalInfo.breeds.mixed) ? 'Mixed Breed' : animalInfo.breeds.primary} &#65121; {animalInfo.contact.address.city}, {animalInfo.contact.address.state}</p>
                            <p>{animalInfo.age} &#65121; {animalInfo.gender} &#65121; {animalInfo.size}
                                {Object.values(animalInfo.colors).some(color => color !== null) &&
                                    <> &#65121; {Object.values(animalInfo.colors).filter(color => color !== null).join(', ')}</>
                                }
                            </p>
                            {animalInfo.description &&
                                <>
                                    <h4>About</h4>
                                    <p>{animalInfo.description}</p>
                                </>
                            }
                            {animalInfo.tags.length > 0 &&
                                <>
                                    <h4>Characteristics</h4>
                                    <p>{animalInfo.tags.join(', ')}</p>
                                </>
                            }
                            {Object.values(animalInfo.environment).includes(true) &&
                                <>
                                    <h4>Good in a home with</h4>
                                    <p>{Object.entries(animalInfo.environment).filter(env => env[1]).map(env => env[0]).join(', ')}</p>
                                </>
                            }
                            {Object.values(animalInfo.environment).includes(false) &&
                                <>
                                    <h4>Prefers a home without</h4>
                                    <p>{Object.entries(animalInfo.environment).filter(env => !env[1]).map(env => env[0]).join(', ')}</p>
                                </>
                            }
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