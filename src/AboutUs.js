import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import {Button, ButtonGroup, Card, CardGroup, Carousel, Container, Image, Jumbotron, Row, Col} from 'react-bootstrap';
import Bithja from './images/top4.png';

function AboutUs() {
    return (
        <div className="AboutUs my-5">
            <Jumbotron className="cold-purple-bg text-white">
                <Row>
                    <Col><Image src={Bithja}/></Col>
                    <Col sm={7}>
                        <h1>We are Anna and Bithja the founders of <i>Déjà Porté</i>!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
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
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
}

export default AboutUs;