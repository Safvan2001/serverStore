const mongoose=require('mongoose')
mongoose.connect(process.env.baseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("____Mongodb Atlas Connected____");
}).catch(()=>{
    console.log("......Mongodb connoction error...");
})