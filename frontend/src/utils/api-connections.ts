import axios from 'axios';

import { GetProductsRes } from '../types/product';

const API = 'http://localhost:65000';

export async function getProducts(){
    const products = await axios.get(`${API}/product/getall`);
    return products.data;
}