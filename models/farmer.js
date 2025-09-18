const mongoose = require("mongoose");
const farmerSchema = new mongoose.Schema({
    name :{ type: string,required: true },
    email :{ type: string,required: true , unique: true },
    phone :{ type: string,required: true },
    farmLocation :{ type: string,required: true },
    crops :{ type: [string], default: [] },
},{timestamps: true});
module.exports = mongoose.model("farmer,farmerschema");