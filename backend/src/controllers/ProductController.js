import { Product } from '../models/Product';

class ProductController {
    async store(req, res) {

        const { Nome, Descricao, Valor, Vencimento } = req.body;

        try {

            const newProduct = new Product({
                Nome,
                Descricao,
                Valor,
                Vencimento,
            });

            await newProduct.save()

            return res
                    .status(201)
                    .json(newProduct);

        } catch(err) {
            return res
                    .status(400)
                    .json(err);
        }
    }

    async index(req, res) {
        const allProducts = await Product.find();

        return res.send(allProducts);
    }

    async show(req, res) {
        const { productId } = req.params;

        const foundProduct = await Product.findOne({ _id: productId })

        if (foundProduct) {
            return res.json(foundProduct);
        } else {
            return res
                    .status(404)
                    .json({ message: "Product not found" });
        }
    }

    async update(req, res) {
        const { productId } = req.params;
        const { Nome, Descricao, Valor, Vencimento } = req.body;

        try  {

            const updatedProduct = await Product.findByIdAndUpdate(productId, {
                Nome,
                Descricao,
                Valor,
                Vencimento,
            }, {  new: true });

            return res.json(updatedProduct);
        } catch(err) {

            return res
                    .status(404)
                    .json({ message: "Product not found" });
        }
    }

    async remove(req, res) {
        const { productId } = req.params;

        if(await Product.findOne({ _id: productId })) {
            await Product.deleteOne({
                _id: req.params.productId,
            });

            return res
                    .status(204)
                    .end();
        } else {
            return res
                    .status(404).end();
        }
    }
}

export default new ProductController();