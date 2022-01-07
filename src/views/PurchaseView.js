import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCart/DetailCart";

export const PurchaseView = ({history}) => {
    const handleCancelButton = () => {
        history.push("/")
    }

    return(
        <div>
            <h1>Shopping Cart Page</h1>
            <DetailCart />
            <Row>
                <Col xs={6}> 
                <Button onClick={handleCancelButton} variant="danger">Cancel</Button> 

                </Col>
                <Col xs={6}>
                <Button variant="success">Buy</Button>
                </Col>
            </Row>
        </div>
    )
}