const express = require('express');
const router = express.Router();
const ProductsService=require('./../services/products.service');
const Product=new ProductsService();
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json({
      payload: {
        products,
      },
    });
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const createProduct = await Product.create(body);
    res.json(createProduct);
  } catch (error) {
    next(error);
  }
});
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updProduct = await Product.update(id, body);
    res.json(updProduct);
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.delete(id);
    res.json({
      id,
      message: 'El producto ha sido eliminado',
    });
  } catch (error) {
    next(error);
  }
});
// router.get('/', (req, res) => {
//   res.status(200).json({
//     payload: [
//       {
//         id: '23334',
//         name: 'product 1',
//         description: 'description',
//         image: '23',
//         price: '12334',
//       },
//       {
//         id: '23334',
//         name: 'product 1',
//         description: 'description',
//         image: '23',
//         price: '12334',
//       },
//       {
//         id: '23334',
//         name: 'product 1',
//         description: 'description',
//         image: '23',
//         price: '12334',
//       },
//       {
//         id: '23334',
//         name: 'product 1',
//         description: 'description',
//         image: '23',
//         price: '12334',
//       },
//     ],
//   });
// });

// router.get('/viewDetail', (req, res) => {
//   // const {productId}=req.query;
//   res.status(200).json({
//     id: '23334',
//     name: 'product 1',
//     description: 'description',
//     image: '23',
//   });
// });
module.exports = router;
