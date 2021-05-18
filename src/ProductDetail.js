import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import {Button, Container, Image, Row, Col} from 'react-bootstrap';
import {PRODUCTS} from './products'

function ProductDetail(props) {
    return (
        <Container>
            <Row>
                <Col><Image src={PRODUCTS[props.productId].img}/></Col>
                <Col>
                    <h1>{PRODUCTS[props.productId].title}</h1>
                    <h3>{PRODUCTS[props.productId].price} €</h3>
                    <p>{PRODUCTS[props.productId].description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail;