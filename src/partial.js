const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const templatePath = path.join(__dirname,'../templates/views')
const partialPath =path.join(__dirname,'../templates/partials')

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);

app.get('',(req,res)=>{
    res.render('index',{name:'Tanmay'});
});

app.get('*',(req,res)=>{
    res.render('404',{error:'Page not found'});
});  

app.listen(8001,()=>{
    console.log('Server running at port no 8001')
})