const express = require("express");
const router = express.Router();

//GET /api/health
router.get("/health", (req, res, next) => {
    res.send("OK");
  });

  router.use('/',require('./schedules'));

module.exports = router;
