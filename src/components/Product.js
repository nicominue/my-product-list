import React from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import "../assets/css/styles.css";

const styles = {
    fontSize: "14px",
}

export const Product = ({ item }) => {
    const { title, image, price } = item;
    return (
        <Col xs={4}>
            <Row>
                <Col xs={8}>
                    <div style={styles} >{title}</div>
                </Col>
                <Col xs={4}> <Button variant="primary">
                    Price <Badge bg="secondary">{price}</Badge>
                    <span className="visually-hidden">$</span>
                </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <img className="img-product" alt="" src={image}></img>
                </Col>
            </Row>
        </Col>
    );
};