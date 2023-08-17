const express=require('express');
const aboutRouter=require('./about.router');
const contactRouter=require('./contact.router');
const productsRouter=require('./products.router');
const servicesRouter=require('./services.router');
const skillRouter = require('./skill.router');
const userRouter=require('./user.router');
function routerApi(app) {
  const router=express.Router();
  app.use('/api/v1',router);
router.use('/about',aboutRouter);
router.use('/products',productsRouter);
router.use('/services',servicesRouter);
router.use('/contact',contactRouter);
router.use('/skills', skillRouter);
router.use('/users',userRouter);
}

module.exports=routerApi;
