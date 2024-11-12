const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/blog',(req,res)=>{
 res.render('blog')
})



module.exports=router