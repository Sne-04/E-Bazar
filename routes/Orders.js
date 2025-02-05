import express from 'express';
const router = express.Router();
import {createProduct,fetchAllProducts,fetchProductById,updateProduct} from '../model/Order.js'; // Sequelize Order model

// Create an order
router.post('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        // const order = await order.create(req.body);
        res.render('upbuy')
        // res.status(201).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/:id', async (req, res) => {
    try {
        // Extract the product ID from the URL parameters
        const productId = req.params.id;

        // Optionally, you can fetch the product details from the database using the ID
        // const product = await Product.findById(productId);

        // Render the 'buy' page and pass the product ID (and other data if necessary)
        res.render('buy', { productId });
    } catch (err) {
        res.status(500).json({ error: "Failed to render the page" });
    }
});

// Fetch all orders
// router.get('/:id', async (req, res) => {
//     try {
//         const orders = await orders.findAll();
//         res.status(200).json(orders);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

export default router;
