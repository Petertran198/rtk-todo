import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { auth } from '../../firebase/Firebase';
export default function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegister = async (e) => {};

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
                        <Button variant='success' block type='submit'>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
