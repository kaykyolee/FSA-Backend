
const client=require('./client')

//drop tables
const dropTables=async()=>{
    try{
        await client.query(`
        DROP TABLE IF EXISTS dates;
        DROP TABLE IF EXISTS lists;
        DROP TABLE IF EXISTS todaysLists;
        DROP TABLE IF EXISTS tasks;
        `)
    }catch(error){
        throw error
    }
}

//create tables
const createTables=async()=>{
    await client.query(`
        CREATE TABLE dates (
            date_id SERIAL PRIMARY KEY,
            date varchar(10) UNIQUE NOT NULL
        );
        CREATE TABLE lists(
            list_id SERIAL PRIMARY KEY,
            goal varchar(50) NOT NULL
        );
        CREATE TABLE todaysLists(
            todaysList_id SERIAL PRIMARY KEY,
            date_id INTEGER REFERENCES dates(date_id) NOT NULL,
            list_id INTEGER REFERENCES lists(list_id) NOT NULL,  
            task_id INTEGER REFERENCES tasks(task_id) NOT NULL
        );
        CREATE TABLE tasks(
            task_id SERIAL PRIMARY KEY,
            title varchar(50) NOT NULL,
            description varchar(100),
            priority varchar(50) NOT NULL,
            status BOOLEAN NOT NULL,
            notes varchar(100)
        );
    `)
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
