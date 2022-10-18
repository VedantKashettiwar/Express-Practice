const express=require('express');
const app = express()
const path = require('path');

const templatePath=path.join(__dirname,'../templates');

app.set('view engine','hbs')
app.set('views',templatePath);

app.get('',(req,res)=>{
    res.render('index',{name:'Tanmay'})
})

app.listen(8001,()=>{
    console.log('started');
})