const express = require("express");
const router = express.Router();

//GET /api/health
router.get("/health", (req, res, next) => {
  res.send("OK");
});

router.use("/schedule", require("./schedules"));
router.use("/lists", require("./lists"));
router.use("/tasks", require("./tasks"));
router.use("/todayslists",require("./todayslists"));

module.exports = router;
