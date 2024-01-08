import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    image: String,
    info: String,
    price: Number,
});


export const Imtahan = mongoose.model('imtahan', productSchema);