import { Row } from 'react-bootstrap';
import { ContactProvider } from '../contexts/ContactContext';
import ConfirmWindow from './contact/ConfirmWindow';
import ContactForm from './contact/ContactForm';
import ContactImage from './contact/ContactImage';

function Contact() {
    return (
        <ContactProvider>
            <section id='contacts'>
                <Row className='title-heading mt-5'>
                    <ContactForm/>
                    <ContactImage />
                </Row>
            </section>
            <ConfirmWindow />
        </ContactProvider>
    );
}

export default Contact;