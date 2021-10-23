import { Component } from 'react';
import { Navbar, NavDropdown, Nav, Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { handleInitialData } from '../redux/actions';
import { logout } from '../redux/actions/authAction';

class Header extends Component{
    
    
    render() {
        
        const { user, dispatch } = this.props;
        // console.log('User', user)
        // const {id} = user;
        // console.log(id);
        const handleLogout = () => {
            dispatch(logout())
            // dispatch(handleInitialData());
        };

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/" className='mx-5'>WouldYouRather</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-5' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container className='w-50'>
                            <Nav className="me-5 d-flex justify-content-between align-items-center" >
                                <Nav.Link href="/">Dashboard</Nav.Link>
                                <Nav.Link href="/addquestion">Add New Poll</Nav.Link>
                                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                            </Nav>
                        </Container>
                        <Nav>
                            <Container className='d-flex mx-lg-4 justify-content-center'>
                                <NavDropdown title={user.name} id="collasible-nav-dropdown" >
                                    <NavDropdown.Item>
                                        <Button onClick={handleLogout} className='p-0' variant='light'>Log out</Button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: authedUser && users[authedUser]
    };
};

export default connect(mapStateToProps)(Header);