const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/blog/articles',(req,res)=>{
    res.sendFile(path.join(__dirname, 'articles', 'javascript.html'));
})


module.exports=router;