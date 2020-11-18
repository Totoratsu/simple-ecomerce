const initialState = {
    productsList: []
};

export default (state = initialState, action:any) => {
    if (action.type === 'UPDATE_PRODUCT_LIST') {
        return {
            ...state,
            productsList: action.payload
        }
    }

    return state;
};

export const getProductList = (state:any) => state.ProductReducer.productsList;