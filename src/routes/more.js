const express=require('express');
const router=express.Router();
const path=require('path');


router.get('/more',(req,res)=>{
    res.render('articles/more')
})


module.exports=router