import { useContext } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { PetFinderContext } from '../../contexts/PetFinderContext';

function Loading() {
    const { isGetNextPage, isSearchStarted } = useContext(PetFinderContext);
    return (
        <>
            {(isGetNextPage || isSearchStarted) &&
                <Modal id='loadingOverlay' contentClassName='text-center loading' backdrop='static' keyboard={false} restoreFocus={false} centered show>
                    <Modal.Body>
                        <Spinner animation='border' role='status' variant='light' />
                        <p>Loading...</p>
                    </Modal.Body>
                </Modal>
            }
        </>
    );
}

export default Loading;