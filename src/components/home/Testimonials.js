import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { getTestimonials } from '../../services/testimonials-api';

function Testimonials() {
    const [data, setData] = useState();
    // function to sort the testimonials data array in random order (using compare function)
    const getRandom = (array, num) => array.sort(() => 0.5 - Math.random()).slice(0, num);
    // function to update testimonials state
    useEffect(() => {
        !data &&
            getTestimonials()
                .then(results => setData(results));
    }, [data]);

    return (
        <section id='testimonials'>
            {data &&
                <Carousel id='testimonial-carousel' variant='dark' indicators={false} data-bs-ride='false'>
                    {getRandom(data.results, 3).map(result =>
                        <Carousel.Item className='testimonial-item text-muted' key={result.id}>
                            <h2>{result.message}</h2>
                            <img className='testimonial-image' src={result.avatar} alt='testimonial-avatar' />
                            <em>{result.name}, {result.location}</em>
                        </Carousel.Item>
                    )}
                </Carousel>
            }
        </section>
    );
}

export default Testimonials;