const express = require("express");
const router = express.Router();

const { createGang, getAllGangs } = require("../controllers/gang.controller");

router.post("/create", createGang);
router.get("/", getAllGangs);

module.exports = router;