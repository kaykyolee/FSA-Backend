const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../db/helpers/tasks");

//GET - /api/tasks - get all tasks
router.get("/", async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
});

//GET - api/tasks/:taskId - get task by id
router.get("/:taskId", async (req, res, next) => {
  try {
    const task = await getTaskById(req.params.taskId);
    res.send(task);
  } catch (error) {
    next(error);
  }
});

//POST - api/tasks - create a new task
router.post("/", async (req, res, next) => {
  try {
    const task = await createTask(req.body);
    res.send(task);
  } catch (error) {
    next(error);
  }
});

//PUT - api/tasks - update an existing task

router.put("/:taskId", async (req, res, next) => {
  try {
    const task = await updateTask(req.params.taskId, req.body);
    res.send(task);
  } catch (error) {
    next(error);
  }
});

//DELETE - api/tasks/"taskId" - delete a task
router.delete("/:taskId", async (req, res, next) => {
  try {
    const task = await deleteTask(req.params.taskId);
    res.send(task);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
