const express =require('express');
const path =require('path');
const apiRouter=require('./routes');

const app =express();


app.use('/api/checker',apiRouter);

app.listen(process.env.PORT || '5000',() =>{
    console.log('port is on')
});