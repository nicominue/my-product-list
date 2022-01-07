import React from "react";
import { ListProducts } from '../components/Products/ListProducts';
import { AlertProduct } from '../components/Products/AlertProduct';
import { Container } from "react-bootstrap";

export const Home = () => (
    <Container>
        <div className="App">
            <AlertProduct />
            <ListProducts />
        </div>
    </Container >
)