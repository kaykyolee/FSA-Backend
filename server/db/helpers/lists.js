const client = require("../client");

async function createList({ goal }) {
  try {
    const {
      rows: [list],
    } = await client.query(
      `
        INSERT INTO lists (goal)
        VALUES ($1)
        RETURNING *;
        `,
      [goal]
    );
    return list;
  } catch (error) {
    throw error;
  }
}

const getAllLists = async () => {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM lists;
            `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getListById = async (listId) => {
  try {
    const {
      rows: [lists],
    } = await client.query(
      `SELECT *
      FROM lists
      WHERE "listId"=${listId};`
    );
    return lists;
  } catch (error) {
    throw error;
  }
};

const updateList = async (listId, body) => {
  try {
    const { rows } = await client.query(
      `UPDATE lists
          SET goal='${body.goal}'
          WHERE "listId"=${listId}
          RETURNING *;
          `
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const deleteList = async (listId) => {
  try {
    const { rows } = await client.query(
      `
          DELETE FROM lists
          WHERE "listId" = ${listId}
          RETURNING *;
          `
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
};
