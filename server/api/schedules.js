const express = require("express");
const router = express.Router();

const {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../db/helpers/schedules");

//GET - /api/schedules - get all schedules
router.get("/", async (req, res, next) => {
  try {
    const schedules = await getAllSchedules();
    res.send(schedules);
  } catch (error) {
    next(error);
  }
});

//GET - api/schedules/:scheduleId - get schedule by id
router.get("/:scheduleId", async (req, res, next) => {
  try {
    const schedule = await getScheduleById(req.params.scheduleId);
    res.send(schedule);
  } catch (error) {
    next(error);
  }
});

//POST - api/schedules - create a new schedule
router.post("/", async (req, res, next) => {
  try {
    const schedule = await createSchedule(req.body);
    res.send(schedule);
  } catch (error) {
    next(error);
  }
});

//PUT - api/schedules - update an existing schedule

router.put("/:scheduleId", async (req, res, next) => {
  try {
    const schedule = await updateSchedule(req.params.scheduleId, req.body);
    res.send(schedule);
  } catch (error) {
    next(error);
  }
});

//DELETE - api/schedules/"scheduleId" - delete a schedule
router.delete("/:scheduleId", async (req, res, next) => {
  try {
    const schedule = await deleteSchedule(req.params.scheduleId);
    res.send(schedule);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
