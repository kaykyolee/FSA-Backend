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

const getAllDates = async () => {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM dates;
            `);
    return rows;
  } catch (error) {
    throw error;
  }
};

const getDateById=async(dateId)=>{
  try{
    const {
      rows:[dates]
    }=await client.query(
      `SELECT *
      FROM dates
      WHERE "dateId"=${dateId};`
    )
    return dates
  }catch (error){
    throw error
  }
}

async function createNewDate(body){
  try{
    const date=body;
    const dates=data.dates;
    dates.push(body);
    return date;
  }catch (error){
    throw error;
  }
}


module.exports = { createDate, getAllDates, getDateById, createNewDate };
