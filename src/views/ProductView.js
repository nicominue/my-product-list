import React, { useState, useEffect } from "react";
import { getProductByID } from "../app/services/productsServices";

export const ProductView = ({ match }) => {

    const [productDetail, setProductDetail] = useState(null);

    useEffect(async () => {
        getProductByID(match.params.id)
            .then((productfromDB) => setProductDetail(productfromDB))
            .catch((err) => console.log(err));
    }, [match]);

    return (
        <div>
            <h1>
                {productDetail && JSON.stringify(productDetail)}
            </h1>
        </div>
    )
}
