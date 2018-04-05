export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REMOVE_PRODUCT_FROM_CART_COMPLETELY = 'REMOVE_PRODUCT_FROM_CART_COMPLETELY';
export const SHOW_PRODUCT_QUANTITY = 'SHOW_PRODUCT_QUANTITY';

export const addProductToCart = (product) => ({type: ADD_PRODUCT_TO_CART, product: product});

export const removeProductFromCart = (product) => ({type: REMOVE_PRODUCT_FROM_CART, product: product});

export const removeProductFromCartCompletely = (product) => ({type: REMOVE_PRODUCT_FROM_CART_COMPLETELY, product: product});
