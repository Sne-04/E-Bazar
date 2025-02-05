import express from 'express';
import Product from '../model/product.js'; // Sequelize Product model
const router = express.Router();
console.log("in products.js routes;....")
// Fetch product details by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        res.render('productDetails', { detail: product });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Fetch products by category
router.get('/', async (req, res) => {
    const category = req.query.gender;
    console.log("Category ............... ${category}");
    res.render('product', { category });
});
router.get('/productdetails', async (req, res) => {
    const category = req.query.gender;
    console.log("Category ............... ${category}");
    res.render('product', { category });
});

export default router;