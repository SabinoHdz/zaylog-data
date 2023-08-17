const express = require('express');
const router = express.Router();
const AboutService=require('./../services/about.service')
const about= new AboutService();
//Router of about
router.get('/', async (req, res) => {

  const company= await about.find();
  res.status(200).json({
    payload: {
      company,
    },
  });
});
router.get('/:id',async(req,res)=>{
  const {id} =req.params;

})
router.post('/',async(req,res)=>{
  const body =req.body;
  const newCompany=await about.create(body)
  res.status(201).json(newCompany);
})
module.exports = router;
