import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ContactContext } from '../../contexts/ContactContext';


function ConfirmWindow() {
    const {show, hideConfirmation} = useContext(ContactContext);
    // const { show, hideConfirmation } = props;
    return (
        <Modal show={show} id='confirm' dialogClassName='modal-confirm' contentClassName='text-center' size='sm' centered>
            <Modal.Header className='modal-header'>
                <div className='icon-box'>
                    <i className='fas fa-check fa-4x' />
                </div>
                <h4 className='modal-title w-100'>Thank you!</h4>
            </Modal.Header>
            <Modal.Body>
                <p className='text-center'>Your message has been sent.</p>
            </Modal.Body>
            <Modal.Footer>
                <div className='d-grid'>
                    <Button variant='success' onClick={hideConfirmation}>OK</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmWindow;
