import _ from "lodash";

import * as actionTypes from '../actions/userActions';

const initialState = {
    username: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USERNAME: 
            const updatedState = _.cloneDeep(state);
            updatedState.username = action.value;
            return updatedState;
        default: return state;
    }
}


export default reducer;