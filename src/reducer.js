const ADD_ITEM_TO_REGISTRY = 'ADD_ITEM_TO_REGISTRY';

const initialState = {
    registryItems: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_REGISTRY:
            return Object.assign({}, ...state, {registryItems: state.registryItems.concat(action.item)});
        default:
            return state;
    }
};
