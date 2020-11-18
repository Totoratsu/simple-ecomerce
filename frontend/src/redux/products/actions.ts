export default function updateProductsList(productsList: any) {
    return {
        type: 'UPDATE_PRODUCT_LIST',
        payload: productsList
    }
}