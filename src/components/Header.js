import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
    return (
        <Navbar expand='lg' fixed='top' variant='light'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt='logo' width='50' />
                    Get-a-Pet
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id='navbarToggler'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={NavLink} to='home'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='petfinder'>PetFinder</Nav.Link>
                        <Nav.Link as={NavLink} to='contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;