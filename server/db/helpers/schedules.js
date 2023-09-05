const client = require("../client");

const createSchedule = async ({date}) => {
  try {
    const {
      rows: [schedule],
    } = await client.query(
      `
            INSERT INTO schedules (date)
            VALUES($1)
            RETURNING *;
            `,
      [date]
    );
    return schedule;
  } catch (error) {
    throw error;
  }
};


const getAllSchedules = async () => {
    try {
      const { rows } = await client.query(`
              SELECT * 
              FROM schedules;
              `);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const getScheduleById=async(scheduleId)=>{
    try{
      const {
        rows:[schedules]
      }=await client.query(
        `SELECT *
        FROM schedules
        WHERE "scheduleId"=${scheduleId};`
      )
      return schedules
    }catch (error){
      throw error
    }
  }
  


  const updateSchedule = async (scheduleId,body)=>{
    try{
        const {rows}=await client.query(
            `UPDATE schedules
            SET date='${body.date}'
            WHERE "scheduleId"=${scheduleId}
            RETURNING *;
            `
        );
        return rows;
    }catch(error){
        throw error
    }
  }

  const deleteSchedule = async (scheduleId)=>{
    try{
        const {rows}=await client.query(
            `
            DELETE FROM schedules
            WHERE "scheduleId" = ${scheduleId}
            RETURNING *;
            `
        );
    }catch (error){
        throw error
    }
  }

  module.exports = { getAllSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule };

