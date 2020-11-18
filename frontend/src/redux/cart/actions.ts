export default function updateCart(product: any) {
    return {
        type: 'UPDATE_CART',
        payload: product
    }
}