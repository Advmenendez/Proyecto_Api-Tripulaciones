const Gang = require("../models/Gang.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createGang = async (req, res, next) => {
    try {
        const newGang = new Gang();
        newGang.name = req.body.name;
        newGang.captain = req.body.captain;
        newGang.crew = req.body.crew;
        const GangDb = await newGang.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { gang: GangDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllGangs = async (req, res, next) => {
    try {
        const gangs = await Gang.find().populate("pirates");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { gangs: gangs }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createGang, getAllGangs }