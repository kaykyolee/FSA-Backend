const client = require("../client");

async function createTodayslist({ scheduleId, listId, taskId }) {
  try {
    const {
      rows: [todayslists],
    } = await client.query(
      `
        INSERT INTO todayslists ("scheduleId","listId","taskId")
        VALUES ($1,$2,$3)
        RETURNING *;
        `,
      [scheduleId, listId, taskId]
    );
    return todayslists;
  } catch (error) {
    throw error;
  }
}

const getAllTodayslists = async () => {
  try {
    const { rows } = await client.query(`
              SELECT * 
              FROM todayslists;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getTodayslistById = async (todayslist_id) => {
  try {
    const {
      rows: [todayslists],
    } = await client.query(
      `SELECT *
        FROM todayslists
        WHERE todayslist_id=${todayslist_id};`
    );
    return todayslists;
  } catch (error) {
    throw error;
  }
};

module.exports = { createTodayslist, getAllTodayslists, getTodayslistById };
