import defaultAxios from 'axios';

const axios = defaultAxios.create({
    baseURL: 'http://localhost:8888'
});

export async function getAllProducts() {
    try {
        const products = await axios.get('products')

        return products.data;
    } catch (err) {
        return console.error(err);
    }
}

export async function createNewProduct(payload) {
    try {
        const product = await axios.post('products', payload);

        return product.data;
    } catch (err) {
        return console.error(err);
    }
}

export async function updateExistingProduct(payload) {
    try {
        const updatedProduct = await axios.put(`products/${payload._id}`, payload);

        return updatedProduct.data;
    } catch (err) {
        return console.error(err);
    }
}

export async function deleteExistingProduct(productId) {
    try {
        await axios.delete(`products/${productId}`);

        return productId;
    } catch (err) {
        return console.error(err);
    }
}