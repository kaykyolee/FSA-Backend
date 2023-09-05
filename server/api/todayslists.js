const express = require("express");
const router = express.Router();

const { createTodayslist,getAllTodayslists,getTodayslistById } = require("../db/helpers/todayslists");

//GET - /api/todayslists - get all todayslists
router.get("/", async (req, res, next) => {
  try {
    const todayslists = await getAllTodayslists();
    res.send(todayslists);
  } catch (error) {
    next(error);
  }
});

//GET - api/todayslists/:todayslistsId - get todayslists by id
router.get("/:todayslist_id", async (req, res, next) => {
  try {
    const todayslist = await getTodayslistById(req.params.todayslist_id);
    res.send(todayslist);
  } catch (error) {
    next(error);
  }
});

//POST - api/todayslists - create a new todayslists
router.post("/", async (req, res, next) => {
    try {
      const todayslist = await createTodayslist(req.body);
      res.send(todayslist);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
