import express from 'express';
import { config } from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan'; 
import sequelize from './config/database.js'; // Sequelize DB connection

import productRoutes from './routes/Product.js'; 
import productsRoutes from './routes/Products.js'
import userRoutes from './routes/Users.js';
import cartRoutes from './routes/Carts.js';
import categoryRoutes from './routes/Categories.js';
import orderRoutes from './routes/Orders.js';

morgan.token('req-body', (req, res) => JSON.stringify(req.body));

config();
const server = express();

// Sequelize Database connection
sequelize.authenticate()
  .then(() => console.log('MySQL Database connected!'))
  .catch(err => console.log('Error: data base issue' + err));

sequelize.sync()
  .then(() => console.log("Models synchronized"))
  .catch(err => console.log('Error synchronizing models:', err));

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan(':method :url :status :response-time ms - :req-body'));

// Setup views
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/views'));
server.use(express.static(path.join(__dirname, 'public')));

// Modular routes
server.use('/product', productRoutes);
server.use('/products', productsRoutes);
server.use('/productDetails',productRoutes);
server.use('/users', userRoutes);
server.use('/cart', cartRoutes);
server.use('/categories', categoryRoutes);
server.use('/buy', orderRoutes);

// Default route (homepage)
server.get('/', (req, res) => {
    res.render('index');
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 