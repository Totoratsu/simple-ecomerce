import { Request, Response } from 'express';

import ProductModel, { IProduct } from '../models/product.model';

class ProductControllers {

    async createProduct(req: Request, res: Response) {
        const { name, price, photo, description, category } = req.body;

        const newProduct = new ProductModel({
            name, price, photo, description, category
        });
        await newProduct.save();

        return res.json({ statusText: 'done' });
    }

    async getProducts(req: Request, res: Response) {
        const products = await ProductModel.find();
        if (!products || products.length === 0)
            return res.json({ statusText: 'NoProductsFound' }).status(404);

        return res.json({ statusText: 'done', products });
    }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.query;

        await ProductModel.findByIdAndDelete(id);

        return res.json({ statusText: 'done' });
    }

    async editProduct(req: Request, res: Response) {
        const { name, price, photo, description, category } = req.body;
        const { id } = req.query;

        const product = await ProductModel.findById(id);
        if (!product)
            return res.json({ statusText: 'ProductNotFound' }).status(404);

        if (name) product.name = name;
        if (price) product.price = price;
        if (photo) product.photo = photo;
        if (description) product.description = description;
        if (category) product.category = category;

        await product.save();

        return res.json({ statusText: 'done' });
    }

    async getOneProduct(req: Request, res: Response) {
        const { id } = req.query;

        const product = await ProductModel.findById(id);
        if (!product)
            return res.json({ statusText:'ProductNotFound' }).status(404);
        
        return res.json({ statusText:'done', product });
    }

}

const productControllers = new ProductControllers();
export default productControllers;