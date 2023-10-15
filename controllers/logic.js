const req = require('express/lib/request')
const product=require('../models/storeModel')


// add product
const addProduct=async (req,res)=>{
    const {pid,pname,pcatogory,cname,pprace}=req.body

    if(!pid || !pname || !pcatogory || !cname || !pprace){
        res.status(404).json("all inputs are required")
    }
    const preproduct=await product.findOne({pid})
 try{
    if(preproduct){
    res.status(403).json("product already stored")
 }
    else{
        const newProduct=new product({pid,pname,pcatogory,cname,pprace})
      await  newProduct.save()

      res.status(200).json(newProduct)
    }
}

catch{
    res.status(400).json('logic error')
}

}
module.exports={product}