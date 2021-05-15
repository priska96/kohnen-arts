import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import {Button, Card, CardGroup, Container} from 'react-bootstrap';
import {viewDetail, viewList} from "./redux/Shop/shop.actions";
import ProductDetail from "./ProductDetail";


function Shop(props) {
    return (
        <div className="Shop my-5">
            {props.productId ?
                <div>
                    <ProductDetail productId={props.productId}/>
                    <Button variant="loading" onClick={() => props.viewList()}>Back to Overview</Button>
                </div>
                :
                <div>
                    <h1>Products</h1>
                    <Container>
                        <CardGroup className="flex-row justify-content-around align-items-start visible-md">
                            {props.products.map((product, i) => (
                                <Card key={i} className="flex-fill col-md-3 p-3 product">
                                    <Card.Img src={product.img}/>
                                    <div className="card-overlay bottom">
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.price} €</Card.Text>
                                            <Button variant="loading"
                                                    onClick={() => props.viewDetail(product.id)}>View Details</Button>
                                        </Card.Body>
                                    </div>
                                </Card>)
                            )}
                        </CardGroup>
                    </Container>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        productId: state.products.productId
    }
}

const mapDispatchToProps = productId => (dispatch) => {
    return {
        viewDetail: (productId) => dispatch(viewDetail(productId)),
        viewList: () => dispatch(viewList()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);