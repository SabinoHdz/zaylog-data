const express = require('express');
const router = express.Router();
const SkillsService = require('./../services/skills.service');

const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createSkillSchema,
  updateSkillSchema,
  getSkillSchema,
} = require('./../schemas/skill.schema ');

const skill = new SkillsService();
//Router of about
router.get('/', async (req, res, next) => {
  try {
    const valores = await skill.find();
    res.status(200).json({
      payload: {
        valores,
      },
    });
  } catch (error) {
    next(error);
  }
});
router.get(
  '/:id',
  validatorHandler(getSkillSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      // console.log(id);
      const getSkill = await skill.search(id);
      res.json(getSkill);
    } catch (error) {
      //console.log('error: ', error);
      // res.status(404).json({
      //   message: error.message,
      // });
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createSkillSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const addSkill = await skill.create(body);
      res.json(addSkill);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:id',
  validatorHandler(getSkillSchema, 'params'),
  validatorHandler(updateSkillSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updSkill = await skill.update(id, data);
      res.json(updSkill);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const delSkill = skill.delete(id);
    res.json(delSkill);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
