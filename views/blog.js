const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/blog',(req,res)=>{
res.sendFile(path.join(__dirname, 'blog.html'))
})



module.exports=router