import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const AlertProduct = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState("");

    useEffect(() => {
        const lastProduct = localStorage.getItem("lastProduct");
        if (lastProduct) {
            setProduct(lastProduct);
            setShow(true);
        }

        return () => {
            localStorage.removeItem("lastProduct");
        }
    }, []);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Please continue shopping!</Alert.Heading>
                <p>
                    Take the opportunity to buy the product {product} before it runs out!
                </p>
            </Alert>
        );
    } else {
        return <></>
    }
}