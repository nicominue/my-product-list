import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../app/db/db";

export const ShoppingCart = () => {

    const [productsCart, setProductsCart] = useState([])

    useLiveQuery(async () => {
        const productsDB = await db.cart.toArray();
        setProductsCart(productsDB);
    })

    return (
        <>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Shopping Cart"
                        menuVariant="dark"
                    >
                        {productsCart.map((product) => {
                            return <ShoppingCartItem key={product.id} item={product} />
                        })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Total: ${productsCart.reduce((acc, product) => acc + product.price, 0)}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </>
    )

}