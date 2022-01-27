import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ConfirmWindow from './contact/ConfirmWindow';
import ContactForm from './contact/ContactForm';
import ContactImage from './contact/ContactImage';

function Contact() {
    // state to display the confirmation window
    const [show, setShow] = useState(false);
    const showConfirmation = () => setShow(true);
    const hideConfirmation = () => setShow(false);
    return (
        <>
            <section id='contacts'>
                <Row className='title-heading mt-5'>
                    <ContactForm showConfirmation={showConfirmation}/>
                    <ContactImage />
                </Row>
            </section>
            <ConfirmWindow show={show} hideConfirmation={hideConfirmation}/>
        </>
    );
}

export default Contact;