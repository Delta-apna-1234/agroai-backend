const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const sensorRoutes = require("./routes/sensorRoutes");

dotenv.config();
connectDb;
const app = express();
app.use(express.json());
app.use("/api/sensors",sensorRoutes);
const port = process.env,port || 8080;
app.listen (port, () => {
console.log(`surver running on port ${port}`);

)};