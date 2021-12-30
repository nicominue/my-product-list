import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/services/storageServices";
import db from "../../app/db/db";
import "../../assets/css/styles.css";

const styles = {
    fontSize: "14px",
}

export const Product = ({ item }) => {
    const { title, image, price, description, category } = item;

const addProductToCart = ({title, price, category}) => {
    db.cart.add({
        title: title,
        price: price,
        category: category
    });
}

    return (
        <div className="col-lg-4 d-flex align-items-stretch">
            <Card style={{ marginBottom: "15px", padding: 10 }}>
                <Row>
                    <Col xs={8}>
                        <Card.Img
                            className="mx-auto"
                            variant="top"
                            src={image}
                            style={{ width: 120, height: 120 }}
                        />
                    </Col>
                    <Col xs={4}>
                        <Badge pill bg="info">
                            {category}
                        </Badge>{' '}
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Row>
                    <Col>
                        <Button onClick={() => addProductToCart(item)} variant="warning">Add to cart</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => saveLastInterestProduct(title)} variant="primary">
                            Price <Badge bg="secondary">${price}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};