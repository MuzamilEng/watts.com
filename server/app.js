const express = require('express');
const app = express();
const multer = require('multer');
require('dotenv').config( { path: '.env'})
const connectDB =  require('./db/connect');
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const products = require('./routes/products');
// const Product = require('./models/product');
// const User = require('./models/User');
const auth = require('./routes/auth');
const cors = require('cors')


const port = process.env.PORT;
// middleware
app.use(cors())
app.use(express.static('./public'));
app.use(express.json())
// routes

app.use('/api/v1/products', products)
app.use('/api/v1/auth', auth)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/api/v1/products/uploads', upload.single('image'), async (req, res) => {
  try {
      const Product = require('./models/product');

      const product = new Product({
          title: req.body.title,
          image: req.file.path,
          description: req.body.description, 
      });

      await product.save();

      res.json({ message: 'File uploaded and product created successfully', product });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'File upload and product creation failed' });
  }
});
app.post('/api/v1/products/uploads/:id', upload.single('file'), async (req, res) => {
  try {
      // Assuming you have already imported your Mongoose model
      const Product = require('./models/product');
      const productId = req.params.id;

      // Find the product by its ID
      const product = await Product.findById(productId);

      if (!product) {
          return res.status(404).json({ error: 'Product not found' });
      }

      // Update the product properties
      product.title = req.body.title || product.title; // Update title if provided, else keep the existing value
      product.description = req.body.description || product.description; // Update description if provided, else keep the existing value

      // If a new file is uploaded, update the image path
      if (req.file) {
          product.image = req.file.path;
      }

      // Save the updated product to the database
      await product.save();

      res.json({ message: 'Product updated successfully', product });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Product update failed' });
  }
});


app.use(errorHandler)
app.use(notFound)

const start = async () => {
    try {
      await connectDB(process.env.URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    } 
  };
  
  start(); 