const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PirateSchema = new Schema(
    {
        name: { type: String, require: true },
        age: { type: Number, require: true },
        origin: { type: String, require: true },
        fruit: { type: String }
    },
    { timestamps: true }
);

const Pirate = mongoose.model("pirate", PirateSchema);
module.exports = Pirate;