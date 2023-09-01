
const client=require('./client')

//drop tables
const dropTables=async()=>{
    try{
        await client.query(`
        DROP TABLE IF EXISTS dates;
        DROP TABLE IF EXISTS lists;
        DROP TABLE IF EXISTS tasks;
        DROP TABLE IF EXISTS todayslists;
        `)
        console.log("Dropping tables...")
    }catch(error){
        throw error
    }
}

//create tables
const createTables=async()=>{
    try{
        console.log("Building tables...")
    await client.query(`
        CREATE TABLE dates (
            date_id SERIAL PRIMARY KEY,
            date DATE UNIQUE NOT NULL
        );
        CREATE TABLE lists(
            list_id SERIAL PRIMARY KEY,
            goal VARCHAR(50) NOT NULL
        );
        CREATE TABLE tasks(
            task_id SERIAL PRIMARY KEY,
            title VARCHAR(50),
            description TEXT,
            priority VARCHAR(50),
            status BOOLEAN NOT NULL,
            notes TEXT
        );
        CREATE TABLE todayslists(
            todayslist_id SERIAL PRIMARY KEY,
            date_id INTEGER REFERENCES dates(date_id) NOT NULL,
            list_id INTEGER REFERENCES lists(list_id) NOT NULL,  
            task_id INTEGER REFERENCES tasks(task_id) NOT NULL
        );
    `)
    }catch (error){
        throw error
    }
}


//insert mock data from seedData.js


//call functions to build database
const rebuildDb = async()=>{
    try{
        client.connect()
        await dropTables()
        await createTables()
    } catch(error){
        console.error (error)
    } finally {
        client.end()
    }
}

rebuildDb()
