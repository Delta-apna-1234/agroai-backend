const express = require("express");
const{
    addsensorData,
    getAllsensorDataById,
    getsensorDataById,
    updatesensorData,
    deletesensorData,

} = require("../controllers/sensorController");

const router = express.Router();

router.post("/", addsensorData);
router.get("/", getAllsensorData);
router.get("/", getsensorData);
router.put("/", updatesensorData);
router.delete("/", deletesensorData);
module.exports = router;
