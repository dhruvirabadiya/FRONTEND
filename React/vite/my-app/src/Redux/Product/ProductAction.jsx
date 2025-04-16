import { Add_Product } from "./ProductConstant";

export const addProduct = (product) => {
    return {
        type: Add_Product,
        payload: product
    }
}