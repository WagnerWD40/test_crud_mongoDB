import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    Nome: String,
    Descricao: String,
    Valor: Number,
    Vencimento: Date,
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
