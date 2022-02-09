import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/Firebase';

export default function SignUpForm() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            const user = userCredentials.user;
            console.log(user, userCredentials);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Code:', errorCode, 'Message:', errorMessage);
        }
    };
    return (
        <div className='h-75 w-75 m-1'>
            {' '}
            <Card className='bg-success' onSubmit={(e) => handleRegister(e)}>
                <Card.Body>
                    <h2 className='text-center mb-4 text-white'>Sign Up</h2>
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
                        <Button variant='primary' block type='submit'>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
