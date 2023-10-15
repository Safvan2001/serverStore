
const express=require('express')
const { product } = require('../controllers/logic')

const router=new express.Router()

// add product
router.post('/product/addproduct',product)

// get all


module.exports=router