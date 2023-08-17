const express = require('express');
const router = express.Router();
const UserService = require('../services/users.service');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('./../schemas/user.schema');

const User = new UserService();
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const getUser = await User.findOne(id);
      res.json(getUser);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const createUser = await User.create(data);
      res.json(createUser);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updateUser = await User.update(id, data);
      res.json(updateUser);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const {id}=req.params;
      await User.delete(id);
      res.json({
        id,
        message:'El usuario se ha eliminado'
      })
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
