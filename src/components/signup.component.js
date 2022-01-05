import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleCpassword = (e) => {
        setCpassword(e.target.value);
        setSubmitted(false);
    };
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || number === '' || password === '' || cpassword === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    // const successMessage = () => {
    //     navigate('/')

    // }
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h5>User {name} successfully registered!!</h5>


            </div>
        );
    };
    if (successMessage == 200) {
        navigate('/')
    }

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
        <>
            <div className="container">
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <section className="signup">
                    <Form>
                        <h3 className="si_h3">Sign Up</h3>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <Form.Label>Full Name <span>*</span></Form.Label>
                            <Form.Control onChange={handleName} value={name} type="text" placeholder="full name*" autoComplete="off" required />

                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <Form.Label>Email address <span>*</span></Form.Label>
                            <Form.Control onChange={handleEmail} value={email} type="email" placeholder="your email*" autoComplete="off" required />

                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicEmail">
                            <Form.Label>Phone Number <span>*</span></Form.Label>
                            <Form.Control onChange={handleNumber} value={number} type="text" placeholder="your number*" autoComplete="off" required />

                        </Form.Group>

                        <Form.Group className="form-group" controlId="formBasicPassword">
                            <Form.Label>Password <span>*</span></Form.Label>
                            <Form.Control onChange={handlePassword} value={password} type="password" placeholder="your password*" autoComplete="off" required />
                        </Form.Group>
                        <Form.Group className="form-group" controlId="formBasicPassword">
                            <Form.Label>Confirm Password <span>*</span></Form.Label>
                            <Form.Control onChange={handleCpassword} value={cpassword} type="password" placeholder="confirm password*" autoComplete="off" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/login">sign in?</a>
                        </p>
                    </Form>
                </section>
            </div>

        </>
    )
}

export default Signup

