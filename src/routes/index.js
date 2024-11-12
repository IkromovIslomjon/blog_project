const mainRoute=require('./main');
const blogRoute=require('./blog');
const moreRoute=require('./more');
const javascriptRoute=require('./javascript');
const {Router} = require('express');

const api =  Router()
    .use(mainRoute)
    .use(blogRoute)
    .use(moreRoute)
    .use(javascriptRoute)

module.exports= Router().use(api)