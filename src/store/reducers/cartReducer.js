import _ from 'lodash';

import * as actionTypes from '../actions/actions';

const initialState = {
    cartProducts: [],
};

const reducer = (state = initialState, action) => {
    const updatedState = _.cloneDeep(state);
    const updatedCartProducts = updatedState.cartProducts;

    let index;

    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_CART:
            index = updatedCartProducts.findIndex(product => product._id === action.product._id);

            if (index === -1) {
                updatedCartProducts.push(action.product);
            } else {
                updatedCartProducts[index].quantity++;
            }

            return updatedState;

        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            index = updatedCartProducts.findIndex(product => product._id === action.product._id);

            if (index === -1) {
                return updatedState;
            } else {
                if (updatedCartProducts[index].quantity === 1) {
                    updatedCartProducts.splice(index, 1);
                } else {
                    updatedCartProducts[index].quantity--;
                }
            }

            return updatedState;

        case actionTypes.REMOVE_PRODUCT_FROM_CART_COMPLETELY:
            index = updatedCartProducts.findIndex(product => product._id === action.product._id);

            if(index === -1) {
                return updatedState;
            } else {
                updatedCartProducts.splice(index, 1);
            }

            return updatedState;

        default: return updatedState;
    }
}

export default reducer;