import React from 'react';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap';

import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from './redux/Counter/counter.actions';
import logo from "./logo.svg";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Shop from "./Shop";
import Contact from "./Contact";

function App(props) {
    return (

        <div className="App">
            {/*<div>*/}
            {/*    Count: {props.count}*/}
            {/*</div>*/}
            {/*<button onClick={() => props.increaseCounter()}>Increase Count</button>*/}
            {/*<button onClick={() => props.decreaseCounter()}>Decrease Count</button>*/}

            <div className="navigation">
                <div className="navigation-sub">
                    <Navbar expand="md" fixed="top" className="sea-mist-bg justify-content-end pr-0">
                        <Navbar.Brand href="/" className="flex-grow-2 text-right">
                            <img
                                src={logo}
                                className="d-inline-block align-top logo"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto flex-grow-1">
                                <Nav.Link href="#home" className="flex-grow-1 text-center">Home</Nav.Link>
                                <Nav.Link href="#shop" className="flex-grow-1 text-center">Shop</Nav.Link>
                                <Nav.Link href="#aboutus" className="flex-grow-1 text-center">About Us</Nav.Link>
                                <Nav.Link href="#contact" className="flex-grow-1 text-center">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            {props.productId ?
                <React.Fragment>
                    <a className="anchor" name="shop"/>
                    <Shop/>
                </React.Fragment>
                :
                <React.Fragment>
                    <a className="anchor" name="home"/>
                    <Home/>
                    <a className="anchor" name="shop"/>
                    <Shop/>
                    <a className="anchor" name="aboutus"/>
                    <AboutUs/>
                    {/*<div id="project-details"/>*/}
                    <a className="anchor" name="contact"/>
                    <Contact/>
                </React.Fragment>
            }

            <footer>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             className="bi bi-chevron-double-up" viewBox="0 0 18 18">
                            <path fillRule="evenodd"
                                  d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                            <path fillRule="evenodd"
                                  d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>
                    </a>
                </div>
                {/*Copyright*/}
                <div className="text-center p-3 cold-purple-bg">
                    © 2020 Copyright: <span className="text-dark">Priska Kohnen</span>
                </div>
            </footer>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
        productId: state.products.productId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);