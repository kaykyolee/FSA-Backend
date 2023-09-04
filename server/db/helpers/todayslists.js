const client = require ('../client')

async function createTodayslist({dateId, listId, taskId}){
    try{
        const{
            rows:[todayslists],
        }=await client.query(`
        INSERT INTO todayslists ("dateId","listId","taskId")
        VALUES ($1,$2,$3)
        RETURNING *;
        `,
        [dateId,listId,taskId]
        )
        return todayslists
    } catch (error){
        throw error
    }
}

module.exports = {createTodayslist}