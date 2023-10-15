const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
pid:{
type:Number,
required:true,
trim:true,
unique:true
},
pname:{
    type:String,
    required:true,
    trim:true
},
pcatogory:{
    type:String,
    required:true,
    trim:true
},
cname:{
    type:String,
    required:true,
    trim:true
},
pprice:{
    type:Number,
    required:true,
    trim:true
}
})

const items=new mongoose.model('items',productSchema)

module.exports=items