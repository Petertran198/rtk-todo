import React from 'react';
import { Container, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../app/userSlice';
import './navbar.css';
function Navbar() {
    const user = useSelector(getUser);
    return (
        <>
            <NavbarBootstrap bg='dark' variant='dark' className='my-2'>
                <Container>
                    <Link to='/'>
                        <NavbarBootstrap.Brand href='#'>
                            Todo Application
                        </NavbarBootstrap.Brand>
                    </Link>
                    <NavbarBootstrap.Toggle />
                    <NavbarBootstrap.Collapse className='justify-content-end'>
                        <NavbarBootstrap.Text>
                            Signed in as:{' '}
                            <strong className='capitalize'>
                                {user.userInfo.userEmail}
                            </strong>{' '}
                            |{' '}
                            <a href='#' className='text-secondary'>
                                Sign Out
                            </a>
                        </NavbarBootstrap.Text>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>
        </>
    );
}

//Found out that if something is exported DEFAULT it  can be named something else. Usefully because bootstrap-react got a component named NavBar and I wanted to name out menu component NavBar as well Ex import NavbarMenuBlahBlah from './components/navbar/Navbar';
export default Navbar;
