const SensorData = require("../models/SensorData");


const addSensorDta = async (req,rea) => {
    try{
        const {temprature, humidity, soilMoisture } = req.body;
        const newData = new SensorData({ temprature, humiditiy, soilMoisture });
        await newData.save();
        res.status(201).json({ messeage: "Data saved succesfully", data: newData )};
    }catch (error) {
         res.status(500).json({ messeage: "error saving data", error.message )};
    }
});


const getAll = async (req,rea) => {
    try{
        const data = await sensorData.find();
        await farmer.save();
        res.status(200).json(data);
    }catch (error) {
         res.status(500).json({ messeage: "Error fetching data", error.message )};
    
    }
});

module.exports = { addSensorData, getAllData };