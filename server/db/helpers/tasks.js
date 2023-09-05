const client = require("../client");

async function createTask({ title, description, priority, status, notes }) {
  try {
    const {
      rows: [task],
    } = await client.query(
      `
        INSERT INTO tasks (title, description, priority, status, notes)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
        `,
      [title, description, priority, status, notes]
    );
    return task;
  } catch (error) {
    throw error;
  }
}

const getAllTasks = async () => {
  try {
    const { rows } = await client.query(`
              SELECT * 
              FROM tasks;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (taskId) => {
  try {
    const {
      rows: [tasks],
    } = await client.query(
      `SELECT *
        FROM tasks
        WHERE "taskId"=${taskId};`
    );
    return tasks;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (taskId, body) => {
  try {
    const { rows } = await client.query(
      `UPDATE tasks
            SET title='${body.title}',
            description='${body.description}',
            priority='${body.priority}',
            status='${body.status}',
            notes='${body.notes}'
            WHERE "taskId"=${taskId}
            RETURNING *;
            `
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    const { rows } = await client.query(
      `
            DELETE FROM tasks
            WHERE "taskId" = ${taskId}
            RETURNING *;
            `
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
