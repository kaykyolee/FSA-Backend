const client = require ('../client')

async function createTodayslist({scheduleId, listId, taskId}){
    try{
        const{
            rows:[todayslists],
        }=await client.query(`
        INSERT INTO todayslists ("scheduleId","listId","taskId")
        VALUES ($1,$2,$3)
        RETURNING *;
        `,
        [scheduleId,listId,taskId]
        )
        return todayslists
    } catch (error){
        throw error
    }
}

module.exports = {createTodayslist}