import { Col } from 'react-bootstrap';
import  cutepet from '../../images/cute-pet-png-images.png';
function ContactImage() {
    return (
        <Col lg={6} className='contact-image'>
            <img src={cutepet} alt='cutepet'/>
        </Col>
    );
}

export default ContactImage;