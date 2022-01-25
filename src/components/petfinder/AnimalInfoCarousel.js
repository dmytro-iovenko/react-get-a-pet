import { Carousel } from 'react-bootstrap';

function AnimalInfoCarousel(props) {

    const { photos } = props;
    return (
        <Carousel id='pf-animal-photos' variant='dark' className='slide' data-bs-ride='carousel' controls={photos.length > 1} indicators={photos.length > 1}>
            {photos.map((photo, index) =>
                <Carousel.Item className='photo-item' key={index}>
                    <div className='card-media'>
                        <img className='card-img d-block w-100' src={photo.large} alt='carousel' />
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default AnimalInfoCarousel;