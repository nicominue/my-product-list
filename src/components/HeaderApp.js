import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const style = {
  margininBottom: "30px"
}

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={style}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Mini E-commerce
      </Navbar.Brand>
      <ShoppingCart/>
    </Container>
  </Navbar>

);