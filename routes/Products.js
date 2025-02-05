import express from 'express';
import Product from '../model/product.js';  // Import the Product model
const router = express.Router();

// Fetch products by category (gender)
router.get('/', async (req, res) => {
    const gender = req.query.gender;

    try {
        // Use Sequelize's findAll method to fetch products by gender
        const product = await Product.findAll({
            where: { gender }
        });

        // If no products are found, return a 404 response
        if (product.length === 0) {
            return res.status(404).json({ message: 'No products found for this category' });
        }
        
        // Return the products as JSON
        res.status(200).json(product);
    } catch (err) {
        console.error('Error fetching products by category:', err);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

export default router;

