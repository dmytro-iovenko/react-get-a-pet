import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
    // use State to control menu expanding
    // src: https://stackoverflow.com/a/58530447
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} expand='lg' fixed='top' variant='light'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/' onClick={() => setExpanded(false)}>
                    <img src={logo} alt='logo' width='50' />
                    Get-a-Pet
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(prev => !prev)} />
                <Navbar.Collapse id='navbarToggler'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={NavLink} to='home' onClick={() => (false)}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='petfinder' onClick={() => setExpanded(false)}>PetFinder</Nav.Link>
                        <Nav.Link as={NavLink} to='contact' onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;