import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    Nome: String,
    Descricao: String,
    Valor: mongoose.Decimal128,
    Vencimento: Date,
}, { timestamps: true });

productSchema.set('toJSON', {
    getters: true,
    transform: (doc, ret) => {
        if (ret.Valor) {
            ret.Valor = ret.Valor.toString();
        }
        return ret;
    }
})

export const Product = mongoose.model('Product', productSchema);
