const client = require("../client");

const createDate = async ({ date }) => {
  try {
    const {
      rows: [dateName],
    } = await client.query(
      `
            INSERT INTO dates (date)
            VALUES($1)
            RETURNING *;
            `,
      [date]
    );
    return dateName;
  } catch (error) {
    throw error;
  }
};

const getAllDates = async () => {
  try {
    const {
      rows: [dateName],
    } = await client.query(`
            SELECT * 
            FROM dates;
            `);
    return dateName;
  } catch (error) {
    throw error;
  }
};

module.exports = { createDate, getAllDates };
