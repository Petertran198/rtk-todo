import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
export default function LoginOrSignUpFormContainer() {
    return (
        <div>
            <Container>
                <div className='d-flex align-items-center vh-100 justify-content-between'>
                    <LoginForm />
                    <SignUpForm />
                </div>
            </Container>
        </div>
    );
}
