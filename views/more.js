const express=require('express');
const router=express.Router();
const path=require('path');


router.get('/more',(req,res)=>{
res.sendFile(path.join(__dirname, 'articles', 'more.html'))
})


module.exports=router