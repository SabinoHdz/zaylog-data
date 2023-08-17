const Joi = require('joi');
const id = Joi.string().uuid();
const name = Joi.string().min(5).max(30);
const description = Joi.string().min(5);
const count = Joi.number().min(1).max(2);
const image = Joi.string().uri();
const price = Joi.number().precision();

const createServiceSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  count: count.required(),
  price: price.required(),
  image: image.required(),
});
const updateServiceSchema = Joi.object({
  name,
  description,
  count,
  price,
  image,
});
const getServiceSchema = Joi.object({
  id: id.required,
});

module.exports = {
  createServiceSchema,
  updateServiceSchema,
  getServiceSchema,
};
