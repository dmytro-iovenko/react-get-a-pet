import { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';
import placeholder from '../../images/card-placeholder.png'



function AnimalCard(props) {

    const { showAnimalInfo } = useContext(PetFinderContext);
    const { animal } = props;
    return (
        <Col xl={3} lg={4} md={6} className='pf-search-column'>
            <Card className='animal-card' onClick={() => showAnimalInfo(animal)}>
                <div className='card-media'>
                    <Card.Img src={animal.primary_photo_cropped && 'small' in animal.primary_photo_cropped ? animal.primary_photo_cropped.small : placeholder} />
                </div>
                <Card.Body>
                    <Card.Title>{animal.name}</Card.Title>
                    <Card.Text>{animal.age} - {(animal.breeds.mixed) ? 'Mixed Breed' : animal.breeds.primary}</Card.Text>
                    {animal.distance && <Card.Text><small className='text-muted'>{Math.ceil(animal.distance)} mile away</small></Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AnimalCard;
