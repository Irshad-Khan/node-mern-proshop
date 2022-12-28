const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('../data/users');
const products = require('../data/products');
const userModel = require('../models/userModel');
const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const connectDB = require('../config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
      await orderModel.deleteMany();
      await productModel.deleteMany();
      await userModel.deleteMany();

      const createdUsers = await userModel.insertMany(users);
      const admin = createdUsers[0]._id;

      // ... it is spread operator, Here we use to add new field in array
      const sampleProducts = products.map(product => {
          return {...product, user:admin} 
      });

      await productModel.insertMany(sampleProducts);

      console.log('Data Imported');
      process.exit();
  } catch (error) {
      console.log(error);
      process.exit(1);
  }  
};

const destroyData = async () => {
  try {
      await orderModel.deleteMany();
      await productModel.deleteMany();
      await userModel.deleteMany();

      console.log('Data Destroyed!');
      process.exit();
  } catch (error) {
      console.log(error);
      process.exit(1);
  }  
};

/**
 * It is use to get argument from command line. We used command to import 'node backend/database/seeder' this command having o argument
 * so else part executed and if we run 'node backend/database/seeder -d' then it get '-d' and run destroye function
 * 
 * For this we use custom command in package.json file in script section we add
 *     "data:import": "node backend/database/seeder",
 *     "data:truncate": "node backend/database/seeder -d"
 * now if we want ro run we use
 *     "npm run data:import"
 *     "npm run data:truncate"
 */
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}