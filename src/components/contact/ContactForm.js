import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

function ContactForm(props) {
    const { showConfirmation } = props;
    const [validated, setValidated] = useState(false);

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        submitted: false
    })

    const handleChange = event => {
        setContactForm(prev => ({ ...prev, [event.target.id]: event.target.value }))
    }

    const handleSubmit = (event) => {
        // prevent real form submit
        event.preventDefault();
        setValidated(true);
        if (event.currentTarget.checkValidity()) {
            setValidated(false);
            setContactForm({
                name: '',
                email: '',
                phone: '',
                message: '',
                submitted: true
            })
            showConfirmation();
        }
    };

    return (
        <Col lg={6}>
            <Form className='contact-form mt-3' noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>GET IN TOUCH</h1>
                <Form.Group className='mb-3'>
                    <Form.Control
                        required
                        type='text'
                        id='name'
                        placeholder='Full Name'
                        onChange={handleChange}
                        value={contactForm.name}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control
                        required
                        type='email'
                        id='email'
                        placeholder='E-mail'
                        onChange={handleChange}
                        value={contactForm.email}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control
                        type='tel'
                        id='phone'
                        placeholder='Phone'
                        onChange={handleChange}
                        value={contactForm.phone}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control as='textarea'
                        required
                        rows={3}
                        id='message'
                        placeholder='Your Message'
                        onChange={handleChange}
                        value={contactForm.message}
                    />
                </Form.Group>
                <Button type='submit' id='search-button'>
                    <i className='far fa-paper-plane' /> Send
                </Button>
            </Form>
        </Col>
    );
}

export default ContactForm;