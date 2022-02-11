import React from 'react';
import { Container, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUser } from '../../app/userSlice';
import { auth } from '../../firebase/Firebase';
import './navbar.css';
function Navbar() {
    const user = useSelector(getUser);
    const history = useHistory();
    const logOut = async (e) => {
        e.preventDefault();
        console.log(e);
        try {
            await auth.signOut();
        } catch (error) {
            console.error(error.message, '-Navbar');
        }
    };

    return (
        <>
            <NavbarBootstrap bg='dark' variant='dark' className='my-2'>
                <Container>
                    <Link to='/' className='navbar-brand'>
                        Todo Application
                    </Link>
                    <NavbarBootstrap.Toggle />
                    <NavbarBootstrap.Collapse className='justify-content-end'>
                        <NavbarBootstrap.Text>
                            {user.userID ? (
                                <>
                                    Email:
                                    <strong className='capitalize'>
                                        {user.userInfo.userEmail}
                                    </strong>{' '}
                                    <a
                                        href='#'
                                        className='text-secondary'
                                        onClick={(e) => logOut(e)}
                                    >
                                        | Sign Out
                                    </a>
                                </>
                            ) : (
                                <>
                                    {' '}
                                    <a
                                        href='#'
                                        className='text-secondary'
                                        onClick={() => history.push('./auth')}
                                    >
                                        Sign In | Make Account
                                    </a>
                                </>
                            )}
                        </NavbarBootstrap.Text>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>
        </>
    );
}

//Found out that if something is exported DEFAULT it  can be named something else. Usefully because bootstrap-react got a component named NavBar and I wanted to name out menu component NavBar as well Ex import NavbarMenuBlahBlah from './components/navbar/Navbar';
export default Navbar;
