import './App.css';
import React, {useState, useEffect} from 'react'
import {Button, Container, Card, Jumbotron} from 'react-bootstrap';
import header from './images/header.jpg'
function Home() {
    return (
        <div className="Home d-flex flex-column justify-content-center">
            <Card className="header overflow-hidden mb-5">
                <Card.Img src={header}/>
                <Card.ImgOverlay className="d-flex align-items-center">
                <h1 className="flex-grow-1 glow">
                    Déjà Porté
                </h1>
                </Card.ImgOverlay>
            </Card>
            <Jumbotron className="our-concept cold-purple-bg text-white mb-5">
                <h1>Our Concept</h1>
                <span className="devider"></span>
                <h4>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                    exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure
                    dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla
                    facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril
                    delenit a
                </h4>
            </Jumbotron>
        </div>
    );
}

export default Home;
