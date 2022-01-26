import { Button, Col, Form } from 'react-bootstrap';

function ContactForm() {
    return (
        <Col lg={6}>
            <Form noValidate className='contact-form mt-3'>
                <h1>GET IN TOUCH</h1>
                <Form.Group className='mb-3'>
                    <Form.Control
                        required
                        type='text'
                        id='contact-name'
                        placeholder='Full Name'
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control
                        required
                        type='email'
                        id='contact-email'
                        placeholder='E-mail'
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control
                        type='tel'
                        id='contact-phone'
                        placeholder='Phone'
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control as='textarea'
                        required
                        rows={3}
                        id='contact-message'
                        placeholder='Your Message'
                    />
                </Form.Group>
                <Button type='submit' id='search-button'>
                    <i class='far fa-paper-plane' /> Send
                </Button>
            </Form>
        </Col>
    );
}

export default ContactForm;