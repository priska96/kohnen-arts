import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import {Button, Container, Image, Row, Col} from 'react-bootstrap';
import {PHOTOS} from './photos'

function PhotoDetail(props) {
    return (
        <Container>
            <Row>
                <Col><Image src={PHOTOS[props.productId].img}/></Col>
                <Col>
                    <h1>{PHOTOS[props.productId].title}</h1>
                    <h3>{PHOTOS[props.productId].price} €</h3>
                    <p>{PHOTOS[props.productId].description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoDetail;