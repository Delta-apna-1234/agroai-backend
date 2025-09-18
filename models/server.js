const express = require("express");
const mongoose = require("mongoose");
const farmerRoutes = require('./routes/farmeraRoutes');
const app = epress();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/agroai");
.then(() => console.log("MongoDb connected"));
.catch(() => console.log(error));
app.use('/farmers',farmerRoutes);

const port  =8080;
app.listen(port,() =>{
    console.log(`Servre running on port ${port}`);
});