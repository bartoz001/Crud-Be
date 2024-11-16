import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import cors from 'cors';
import bodyParser from 'body-parser';
import database from './db/db.js';
import userRoutes from './Routs/Auth.js';
import productRoutes from './Routs/Product.js'

const app = express();

database()
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})