const initialState = {
    cart: []
};

export default (state = initialState, action:any) => {
    if (action.type === 'UPDATE_CART') {
        return {
            ...state,
            cart: action.payload
        }
    }

    return state;
};

export const getCart = (state:any) => state.CartReducer.cart;