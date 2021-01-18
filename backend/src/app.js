import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ProductController from './controllers/ProductController';
import Database from './database';

const app = express();
const PORT = 8888 | process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.get("/products", ProductController.index);
app.post("/products", ProductController.store);

app.get("/products/:productId", ProductController.show);
app.put("/products/:productId", ProductController.update);
app.delete("/products/:productId", ProductController.remove);


app.listen(PORT, err => {
    if (!err) {
        console.log(`Starting server on port ${PORT}`);
    } else {
        console.log(err);
    }
});
