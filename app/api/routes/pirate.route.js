const express = require("express");
const router = express.Router();

const { createPirate, getAllPirate, getPirateById } = require("../controllers/pirate.controller");

router.post("/create", createPirate);
router.get("/", getAllPirate);
router.get("/:pirateId", getPirateById);

module.exports = router;