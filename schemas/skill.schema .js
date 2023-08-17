const Joi = require('joi');
const id = Joi.number().min(1).max(3);
const name = Joi.string();
const description = Joi.string().alphanum().min(5).max(30);

const createSkillSchema = Joi.object({
  name: name.required(),
  description,
});

const updateSkillSchema = Joi.object({
  name: name.required(),
  description,
});

const getSkillSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSkillSchema, updateSkillSchema, getSkillSchema };
