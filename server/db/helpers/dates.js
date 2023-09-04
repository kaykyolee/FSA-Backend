const client = require("../client");
const data=require('../seedData');

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




module.exports = { createDate};
