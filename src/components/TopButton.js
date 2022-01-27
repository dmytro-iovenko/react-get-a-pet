import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function TopButton() {
    // state indicating whether the 'Top' button is visible or not
    const [showTopButton, setShowTopButton] = useState(false);
    // define a target for Intersection Observer
    const topScroll = useRef();

    // function to handle 'Top' button visibility with Intersection Observer
    useEffect(() => {
        topScroll.current && new IntersectionObserver(entries => setShowTopButton(!entries[0].isIntersecting)).observe(topScroll.current);
    }, [topScroll]);

    // when the user clicks on the button, scroll to the top of the document
    const topFunction = () => document.documentElement.scrollTop = 0;

    return (
        <>
            <div id='top-scroll' ref={topScroll} />
            <Button 
                variant='primary' 
                className='rounded-pill' 
                id='top-button' 
                title='Go to top' 
                style={{ display: showTopButton ? 'block' : 'none' }} 
                onClick={topFunction}
            >
                <i className='fas fa-chevron-up' />
            </Button>
        </>
    );
}

export default TopButton;