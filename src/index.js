const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const staticPath = path.join(__dirname,'../public')
const templatePath = path.join(__dirname,'../templates/views')
const partialPath =path.join(__dirname,'../templates/partials')

// middelware
// app.use(express.static(staticPath)); 


// to set view engine 
app.set('view engine','hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.get('',(req,res)=>{
    res.render('index',{name:'Vedant'})
});

app.get('/',(req,res)=>{
    res.send('Home page')
});

app.listen(8000,()=>{
    console.log('Server Started');
});















// const express = require('express');
// const app = express();
// const path = require('path');


// const staticPath=path.join(__dirname,'../public')

// // built in middleware
// // app.use(express.static(staticPath));

// // to set the view engine 
// app.set('view engine','hbs');

// // template engine route 
// app.get('',(req,res)=>{
//     res.render('index',{name:'Vedant'});
// });

// app.get('/',(req,res)=>{
//     res.send('Home page');
// });
// app.get('/about',(req,res)=>{
//     res.send('About page');
// });
// app.get('/serch',(req,res)=>{
//     res.send('Serch page');require('app')
// });
// app.listen(8001,()=>{
//     console.log('Port 8001 started')
// })









// const express = require('express');
// const app = express();
// const path = require('path');

// const staticPath = path.join(__dirname,'../public')

// // middelware
// // app.use(express.static(staticPath)); 


// // to set view engine 
// app.set('view engine','hbs');

// app.get('',(req,res)=>{
//     res.render('index',{name:'Vedant'})
// });

// app.get('/',(req,res)=>{
//     res.send('Home page')
// });

// app.listen(8000,()=>{
//     console.log('Server Started');
// });