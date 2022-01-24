import { Modal, Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <Modal id='loadingOverlay' backdrop='static' keyboard={false} contentClassName='text-center loading' centered>
            <Modal.Body>
                <Spinner animation='border' role='status' variant='light' />
                <p>Loading...</p>
            </Modal.Body>
        </Modal>
    );
}

export default Loading;