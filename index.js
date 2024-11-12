const { urlencoded } = require('body-parser');
const express=require('express');
const app=express();
const path=require('path');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
const mainRoute=require('./views/main');
const blogRoute=require('./views/blog');
const moreRoute=require('./views/more');
app.use(express.static(path.join(__dirname, 'views', 'articles')));
const javascriptRoute=require('./views/javascript');
app.use(express.static(path.join(__dirname, 'views')));


app.use(mainRoute);
app.use(blogRoute);
app.use(moreRoute);
app.use(javascriptRoute);






app.listen(3000, ()=>{
    console.log('Server is running on Port:3000');
    
})