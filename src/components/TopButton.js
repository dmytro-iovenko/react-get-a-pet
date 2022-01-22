import { Button } from 'react-bootstrap';

function TopButton() {
    return(
        <Button variant='primary' className='rounded-pill' id='top-button' title='Go to top'>
            <i className='fas fa-chevron-up'/>
        </Button>
    );
}

export default TopButton;