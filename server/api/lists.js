const express = require("express");
const router = express.Router();

const {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
} = require("../db/helpers/lists");

//GET - /api/list - get all lists
router.get("/", async (req, res, next) => {
  try {
    const lists = await getAllLists();
    res.send(lists);
  } catch (error) {
    next(error);
  }
});

//GET - api/list/:listId - get list by id
router.get("/:listId", async (req, res, next) => {
  try {
    const list = await getListById(req.params.listId);
    res.send(list);
  } catch (error) {
    next(error);
  }
});

//POST - api/list - create a new list
router.post("/", async (req, res, next) => {
  try {
    const list = await createList(req.body);
    res.send(list);
  } catch (error) {
    next(error);
  }
});

//PUT - api/list - update an existing list

router.put("/:listId", async (req, res, next) => {
  try {
    const list = await updateList(req.params.listId, req.body);
    res.send(list);
  } catch (error) {
    next(error);
  }
});

//DELETE - api/list/"listId" - delete a list
router.delete("/:listId", async (req, res, next) => {
  try {
    const list = await deleteList(req.params.listId);
    res.send(list);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
