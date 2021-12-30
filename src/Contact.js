import './App.css';
import React from 'react'
import {Button, Container, Form, Jumbotron} from 'react-bootstrap';

function Contact() {
    return (
        <div className="Contact">
            {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
            {/*    */}
            {/*</Container>*/}
            <Jumbotron className="cold-purple-bg">

            <h1>Contact</h1>
                <Container>
                <p className="w-md-75 w-100 mx-auto contact-text">
                    If you want to get in touch with me, quickly fill out the form below. Let's talk about a project
                    collaboration or just say Hi to me! Of course you can also send me an email directly
                    to <a href="mailto:b.kohnen@myself.com" className="highlight">b.kohnen@myself.com</a>
                </p>
                    <Form className="w-md-75 w-100 mx-auto" action="https://formspree.io/f/xgedegvv" method="POST">
                        <Form.Row className="justify-content-between m-0">
                            <Form.Group controlId="formEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" name="email" required={true} placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Check type="text" name="name" required={true} placeholder="Enter full name"/>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Sign up for the Newsletter</Form.Label>
                                <Form.Check name="newsletter" required={false} />
                            </Form.Group>
                        </Form.Row>
                         <Form.Group controlId="formMessage">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" name="message" required={true} rows={3} placeholder="Enter message"/>
                          </Form.Group>
                        <Button variant="loading" type="submit">Submit</Button>
                    </Form>
                    </Container>
            </Jumbotron>
        </div>
    );
}

export default Contact;