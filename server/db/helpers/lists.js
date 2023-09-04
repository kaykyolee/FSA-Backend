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

module.exports = { createList };
