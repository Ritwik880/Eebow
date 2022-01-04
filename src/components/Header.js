import React, { useState, useEffect } from "react";
import '../App.css'
import logo from '../image/logo.png'
import { Modal, Button, Form } from 'react-bootstrap';
import { db } from "../firebase.js";

const Header = () => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    if (bar) {
        bar.addEventListener('click', () => {
            // alert("clicked")
            nav.classList.add('active')
        })
    }
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                phone: phone,
                // message: message,
            })
            .then(() => {
                setLoader(false);
                // toast.success("Thank you for contacting us.");
                  alert("Registration Completed👍");
                  window.location.href("/")
            })
            .catch((error) => {
                // toast.error("Please provide value in each input field");
                  alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setPhone("");
        // setMessage("");
    };
    return (
        <>
            <section id="header">
                <a href="#"><img className='logo' src={logo} alt="logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a className='active' href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/sbout">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#"><i class='fa fa-shopping-bag'></i></a></li>
                        <i className='fa fa-times' id='close'></i>

                        <button class="btn btn-outline-success" type="submit" onClick={handleShow}>Register</button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton className='modal-title'>
                                <Modal.Title>Register</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modal-body'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="Your Name*" autoCapitalize='off' required value={name}
                                            onChange={(e) => setName(e.target.value)} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="email" placeholder="Your Email*" autoCapitalize='off' required value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="number" placeholder="Your Number*" autoCapitalize='off' required value={phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>

                        </Modal>

                    </ul>
                </div>
                <div id="mobile">
                    {/* <a href="#"><i class='fa fa-shopping-bag'></i></a> */}
                    <i id='bar' className='fa fa-outdent'></i>
                </div>
            </section>

        </>
    )
}

export default Header
