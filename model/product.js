import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Your database connection file

const Product = sequelize.define('Product', {
  gender: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  discount: {
    type: DataTypes.FLOAT
  },
  imageUrl: {
    type: DataTypes.STRING
  },
  productdetails: {
    type: DataTypes.TEXT
  },
  discountPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: true
},
{
  tableName:'product',
});

export default Product;
