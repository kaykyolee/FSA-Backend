//import and invoke express
const express=require('express');
const app=express();

const PORT=5500;
// const client = require('./db/client.js')

//init morgan
const morgan=require('morgan');
app.use(morgan('dev'));

//init body-parser
const cors=require('cors');
app.use(cors());

app.get ('/',(req,res)=>{
    res.send ('Hello World!');
});

//Router: /api
app.use('/api',require('./api'));

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

module.exports=app
