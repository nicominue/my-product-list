import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const style = {
  margininBottom: "30px"
}

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={style}>
    <Container>
      <Link to={"/"} >
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Mini E-commerce
      </Navbar.Brand>
      </Link>
      <ShoppingCart/>
    </Container>
  </Navbar>

);