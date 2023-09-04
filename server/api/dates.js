const client = require("../db/client");
const data=require('../db/seedData');

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

  module.exports = { getAllDates, getDateById, createNewDate };