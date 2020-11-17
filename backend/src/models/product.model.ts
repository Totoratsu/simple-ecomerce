import { Schema, model, Document } from 'mongoose';

const validCategories = {
    values: ['MALE_PRODUCT', 'FEMALE_PRODUCT', 'OTHER'],
    message: '{VALUE} it\'s not a valid category'
};

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, default: 'OTHER', enum: validCategories, required: false },
});

export interface IProduct extends Document {
    name: string;
    price: number;
    photo: string;
    description: string;
    category: string;
}

export default model<IProduct>('Product', ProductSchema);