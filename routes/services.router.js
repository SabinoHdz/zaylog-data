const express = require('express');
const router = express.Router();
const Services = require('./../services/services.service');
const {
  createServiceSchema,
  updateServiceSchema,
  getServiceSchema,
} = require('./../schemas/service.schema');
const validatorHandler = require('../middlewares/validatorHandler');
const Service = new Services();
router.get('/', async (req, res, next) => {
  try {
    let users = await Service.find();
    res.json({
      payload: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
});
router.get(
  '/:id',
  validatorHandler(getServiceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await Service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createServiceSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      let newService = await Service.create(body);
      res.json(newService);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:id',
  validatorHandler(getServiceSchema, 'params'),
  validatorHandler(updateServiceSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      let updService = await Service.update(id, body);
      res.json(updService);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getServiceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Service.delete(id);
      res.json({
        id,
        message: 'El servicio fue eliminado',
      });
    } catch (error) {
      next(error);
    }
  }
);
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
//       },
//       {
//         id: '23334',
//         name: 'product 1',
//         description: 'description',
//         image: '23',
//       },
//       {
//         id: '23334',
//         name: 'product 1',
//         description: 'description',
//         image: '23',
//       },
//     ],
//   });
// });

// router.get('/view', (req, res) => {
//   // const {productId}=req.query;
//   res.status(200).json({
//     id: '23334',
//     name: 'product 1',
//     description: 'description',
//     image: '23',
//   });
// });

module.exports = router;
