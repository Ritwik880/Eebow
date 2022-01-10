import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import signup from '../image/signup_secure.svg'
const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })

    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;
        const res = await fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword

            })
        });
        const data = await res.json();
        if (res.status == 422 || !data) {
            window.alert("Registration Failed");
            console.log("Registration Failed");
        }
        else {
            window.alert("Registration Sucessfull");
            console.log("Registration Sucessfull");

            navigate("/login");
        }


    }



    return (
        <>
            <div className="container">

                <section className="signup">
                    <div class="row justify-content-center">
                        <div class="col-6 column">
                            <img src={signup} />
                        </div>
                        <div class="col-6 column">
                            <Form method="POST">
                                <h3 className="si_h3">Sign Up</h3>
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <Form.Label>Full Name <span>*</span></Form.Label>
                                    <Form.Control name='name' onChange={handleInputs} value={user.name} type="text" placeholder="full name*" autoComplete="off" required />

                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <Form.Label>Email address <span>*</span></Form.Label>
                                    <Form.Control name='email' onChange={handleInputs} value={user.email} type="email" placeholder="your email*" autoComplete="off" required />

                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicEmail">
                                    <Form.Label>Phone Number <span>*</span></Form.Label>
                                    <Form.Control name='number' onChange={handleInputs} value={user.number} type="text" placeholder="your number*" autoComplete="off" required />

                                </Form.Group>

                                <Form.Group className="form-group" controlId="formBasicPassword">
                                    <Form.Label>Password <span>*</span></Form.Label>
                                    <Form.Control name='password' onChange={handleInputs} value={user.password} type="password" placeholder="your password*" autoComplete="off" required />
                                </Form.Group>
                                <Form.Group className="form-group" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password <span>*</span></Form.Label>
                                    <Form.Control name='cpassword' onChange={handleInputs} value={user.cpassword} type="password" placeholder="confirm password*" autoComplete="off" required />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={PostData}>
                                    Submit
                                </Button>
                                <p className="forgot-password text-right">
                                    Already registered <a href="/login">sign in?</a>
                                </p>
                            </Form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Signup

