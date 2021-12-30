import './App.css';
import React from 'react'
import {connect} from 'react-redux';
import Gallery from "./Gallery";
import {Button, Card, CardGroup, Container} from 'react-bootstrap';
import {viewDetail, viewList} from "./redux/Gallery/gallery.actions";
import PhotoDetail from "./PhotoDetail";


function PhotoGallery(props) {
    return (
        <div className="Shop my-5">
            {props.productId ?
                <div>
                    <PhotoDetail productId={props.productId}/>
                    <Button variant="loading" onClick={() => props.viewList()}>Back to Overview</Button>
                </div>
                :
                /*<div>
                    <h1>Products</h1>
                    <Container>
                        <CardGroup className="flex-row justify-content-around align-items-start visible-md">
                            {props.photos.map((photo, i) => (
                                <Card key={i} className="flex-fill col-md-3 p-3 product">
                                    <Card.Img src={phot.img}/>
                                    <div className="card-overlay bottom">
                                        <Card.Body>
                                            <Card.Title>{photo.title}</Card.Title>
                                            <Card.Text>{photo.price} €</Card.Text>
                                            <Button variant="loading"
                                                    onClick={() => props.viewDetail(product.id)}>View Details</Button>
                                        </Card.Body>
                                    </div>
                                </Card>)
                            )}
                        </CardGroup>
                    </Container>
                </div>*/
                <div>
                    <h1>Galerie</h1>
                    <Gallery photos={props.photos} direction={"column"} />
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        photos: state.photos.photos,
        productId: state.photos.productId
    }
}

const mapDispatchToProps = productId => (dispatch) => {
    return {
        viewDetail: (productId) => dispatch(viewDetail(productId)),
        viewList: () => dispatch(viewList()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);