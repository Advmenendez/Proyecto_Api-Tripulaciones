const Pirate = require("../models/Pirate.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createPirate = async (req, res, next) => {
    try {
        const newPirate = new Pirate();
        newPirate.name = req.body.name;
        newPirate.age = req.body.age;
        newPirate.origin = req.body.origin;
        newPirate.fruit = req.body.fruit;
        const PirateDb = await newMusic.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { music: PirateDb.name }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllPirate = async (req, res, next) => {
    try {
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const pirate = await Pirate.find().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { pirate: pirate }
            });
        } else {
            const pirate = await Pirate.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { pirate: pirate }
            });
        }
    } catch (error) {
        return next(error)
    }
}

const getPirateById = async (req, res, next) => {
    try {
        const { pirateId } = req.params;
        const pirateById = await Pirate.findById(pirateId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { music: pirateById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createPirate, getAllPirate, getPirateById };