const express = require("express");
const router = express.Router();

const client = require("../db/client");
client.connect();

const { getAllDates, getDateById, createNewDate } = require("./dates");

//GET /api/health
router.get("/health", (req, res, next) => {
  res.send("OK");
});

//GET - /api/dates - get all dates
router.get("/", async (req, res, next) => {
  try {
    const dates = await getAllDates();
    res.send(dates);
  } catch (error) {
    next(error);
  }
});

//GET - api/dates/:dateId - get date by id
router.get("/:dateId", async (req, res, next) => {
  try {
    const date = await getDateById(req.params.dateId);
    res.send(date);
  } catch (error) {
    next(error);
  }
});

//POST - api/dates - create a new date
router.post('/',async(req,res,next)=>{
    try{
        const date=await createNewDate(req.body);
        res.send(date)
    }catch(error){
        next(error);
    }
})

// //ROUTER: api/todayslist
// router.use('./todayslists',require('./todayslists'));

module.exports = router;
