import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/Firebase';
import './auth.css';

export default function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            history.push('./');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Code:', errorCode, 'Message:', errorMessage);
        }
    };

    return (
        <div className='h-75 w-75 m-1'>
            {' '}
            <Card className='bg-primary' onSubmit={(e) => handleRegister(e)}>
                <Card.Body>
                    <h2 className='text-center mb-4 text-white'>Login</h2>

                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>

                        <br />
                        <div className='d-flex justify-content-between'>
                            <Button variant='success' type='submit'>
                                Login
                            </Button>

                            <button
                                type='submit'
                                onClick={signInWithGoogle}
                                className='btn btn-light'
                            >
                                <i class='fab fa-google'></i> Google
                            </button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
