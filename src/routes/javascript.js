const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/blog/articles',(req,res)=>{
    res.render('articles');
})


module.exports=router;