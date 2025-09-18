const mongoose = require("mongoose");
const sensorDataSchema = new mongoose.Schema({
farmer: { type: mongoose.Schema.Types.ObjectId, ref: "farmer", required: true},
soilMoisture: { type: Number, required: true},
temprature: { type: Number, required: true},
humidity: { type: Number, required: true}
}, { timestamps: true});
module.exports = mongoose.model("SensorData, sensorDataSchema");