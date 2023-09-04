const client = require ("../client")

async function createTask ({title,description, priority, status,notes}) {
    try{
        const {
            rows: [task],
        }=await client.query (`
        INSERT INTO tasks (title, description, priority, status, notes)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
        `,
        [title,description,priority,status,notes]
        );
        return task;
    } catch (error){
        throw error;
    }
}

module.exports = {createTask}