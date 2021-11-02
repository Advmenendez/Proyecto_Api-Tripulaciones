const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GangSchema = new Schema({
    name: { type: String, required: true },
    captain: { type: String, required: true },
    crew: [{ type: Schema.Types.ObjectId, ref: "pirate", required: true }]
});

const Gang = mongoose.model("gang", GangSchema);
module.exports = Gang;