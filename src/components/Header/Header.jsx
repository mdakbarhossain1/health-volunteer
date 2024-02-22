
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import useAuth from '../../hook/useAuth';


const Header = () => {

    const { user, logOut } = useAuth();
    const handleLogout = ()=>{
        logOut()
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">Volunteer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                            <Nav.Link as={Link} to="/event">Event</Nav.Link>
                            <Nav.Link as={Link} to="/blog">BLog</Nav.Link>
                            <h4 className="mx-2">{user.displayName}</h4>

                            {!user.email ?
                                <Link to='/login'><button className="btn btn-success me-2">Login</button></Link> :
                                <button onClick={handleLogout} className="btn btn-success me-2">Logout</button>
                            }
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;