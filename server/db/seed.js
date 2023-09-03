
const client=require('./client')

const {dates, lists, tasks, todayslists}=require('./seedData')

const {createDate}=require('./helpers/dates')

//drop tables
const dropTables=async()=>{
    try{
        await client.query(`
        DROP TABLE IF EXISTS dates cascade;
        DROP TABLE IF EXISTS lists cascade;
        DROP TABLE IF EXISTS tasks cascade;
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

const createInitialDates = async ()=>{
    try{
        for (const dateName of dates){
            await createDate ({date: dateName}) 
        }
        console.log ("created dates")
    }catch(error){
        throw error
    }
}


//call functions to build database
const rebuildDb = async()=>{
    try{
        client.connect()
        await dropTables()
        await createTables()

        console.log("starting to seed...")
        await createInitialDates();
        console.log("created trainers")
    } catch(error){
        console.error (error)
    } finally {
        client.end()
    }
}

rebuildDb()
