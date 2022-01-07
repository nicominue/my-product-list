import db from "../db/db";

export const getProductByID = async (id) => {
    const productFromDB = await db.cart.get(Number(id));
    return productFromDB;
}

export const getAllProducts = async () => {
    const allProductsFromDB = await db.cart.toArray();
    return allProductsFromDB;
}