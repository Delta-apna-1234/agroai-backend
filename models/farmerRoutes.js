const express = require("express");
const router = express.Router();
const Farmer = require('../models/farmer');

router.post('/',async (req,rea) => {
    try{
        const farmer = new Farmer(req.body);
        await farmer.save();
        res.status(201).send(farmer);
    }catch (error) {
         res.status(400).send(error);
    }
});


router.get('/',async (req,rea) => {
    try{
        const farmer = await Farmer.find();
        await farmer.save();
        res.status(200).send(farmers);
    }catch (error) {
         res.status(500).send(error);
    }
});
module.exports = router;