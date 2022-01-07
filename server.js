const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');

app.get('/',(req,res)=>{
    res.sendFile('/index.html');
})

app.listen(3000,()=>console.log('Server Running'));