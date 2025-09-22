const mongoose = require("mongoose");
const sensorDataSchema = new mongoose.Schema({

    temprature: { type: Number, required: true },
    humiditiy: { type: Number, required: true },
    soilMoisture: { type: Number, required: true },
    createdAt : { type: Date, default: Date.now }




});
module.exports = mongoose.model("SensorData", sensorDataSchema );