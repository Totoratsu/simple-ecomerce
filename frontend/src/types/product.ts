interface Response {
    statusText:string;
}

export interface Product {
    name: string;
    price: number;
    photo: string;
    description: string;
    category: string;
}

export interface GetProductRes extends Response {
    product?: Product;
}

export interface GetProductsRes extends Response {
    products?: Array<Product>;
}