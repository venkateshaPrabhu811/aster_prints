const express = require('express');
const path = require("path")
const app = express()
const { findAll , findByName} = require("./models/prodModel")
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log("Server Started")
})

app.get("/",(req,res) =>{
    res.render('index');
})
app.get("/products",async (req,res) =>{
    const data = await findAll();
    res.render('allProducts',{product : data})
})

app.get("/products/:name",async (req,res) =>{
    const {name : prodName} = req.params;
    const product = await findByName(prodName);
    res.render('product',{prodName,product})
})