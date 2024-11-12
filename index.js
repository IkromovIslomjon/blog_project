
const express=require('express');
const app=express();
const path=require('path');
const Router = require('./src/routes')
const ejs = require('ejs')
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'./src/views'));
app.use(express.static(path.join(__dirname, './src/public')));

app.use(Router)


app.listen(3000, ()=>{
    console.log('Server is running on Port:3000');
    
})