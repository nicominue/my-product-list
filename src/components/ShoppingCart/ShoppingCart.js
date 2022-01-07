import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../app/db/db";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {

    const [productsCart, setProductsCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        const total = productsCart?.reduce((totalPrice, currentPrice) => {
            return totalPrice + currentPrice.price
        }, 0)
        setTotalPrice(total)
    }

    useLiveQuery(async () => {
        const productsDB = await db.cart.toArray();
        setProductsCart(productsDB);
    },[])

    useEffect(() => {
        if (productsCart.length > 0) {
            getTotalPrice();
        }
    },[productsCart])

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
                        <NavDropdown.Item>
                            <Link to= {"/purchase"}> Total: ${totalPrice}</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </>
    )

}