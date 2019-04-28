import _ from "lodash";

import * as actionTypes from '../actions/userActions';

const initialState = {
    username: null,
    loggedIn: false
};

const reducer = (state = initialState, action) => {
    let updatedState = _.cloneDeep(state);
    switch (action.type) {
        case actionTypes.SET_USERNAME:
            updatedState.username = action.value;
            return updatedState;
        case actionTypes.IS_LOGGED_IN:
            updatedState.loggedIn = action.value;
            return updatedState;
        default: return state;
    }
}


export default reducer;