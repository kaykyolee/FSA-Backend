const client = require("./client");

const { schedules, lists, tasks, todayslists } = require("./seedData");

const { createSchedule } = require("./helpers/schedules.js");
const { createList } = require("./helpers/lists.js");
const { createTask } = require("./helpers/tasks.js");
const {createTodayslist} = require("./helpers/todayslists.js");

//drop tables
const dropTables = async () => {
  try {
    await client.query(`
        DROP TABLE IF EXISTS schedules cascade;
        DROP TABLE IF EXISTS lists cascade;
        DROP TABLE IF EXISTS tasks cascade;
        DROP TABLE IF EXISTS todayslists;
        `);
    console.log("Dropping tables...");
  } catch (error) {
    throw error;
  }
};

//create tables
const createTables = async () => {
  try {
    console.log("Building tables...");
    await client.query(`
        CREATE TABLE schedules (
            "scheduleId" SERIAL PRIMARY KEY,
            date DATE UNIQUE NOT NULL
        );
        CREATE TABLE lists(
            "listId" SERIAL PRIMARY KEY,
            goal VARCHAR(50) NOT NULL
        );
        CREATE TABLE tasks(
            "taskId" SERIAL PRIMARY KEY,
            title VARCHAR(50),
            description TEXT,
            priority VARCHAR(50),
            status BOOLEAN NOT NULL,
            notes TEXT
        );
        CREATE TABLE todayslists(
            todayslist_id SERIAL PRIMARY KEY,
            "scheduleId" INTEGER REFERENCES schedules("scheduleId") NOT NULL,
            "listId" INTEGER REFERENCES lists("listId") NOT NULL,  
            "taskId" INTEGER REFERENCES tasks("taskId") NOT NULL
        );
    `);
  } catch (error) {
    throw error;
  }
};

//insert mock data from seedData.js

const createInitialSchedules = async () => {
  try {
    for (const schedule of schedules) {
      await createSchedule({date:schedule});
    }
    console.log("created schedules");
  } catch (error) {
    throw error;
  }
};

const createInitialLists = async () => {
  try {
    for (const list of lists) {
      await createList({ goal: list });
    }
    console.log("created lists");
  } catch (error) {
    throw error;
  }
};

const createInitialTasks=async()=>{
    try{
        for (const task of tasks){
            await createTask(task);
        }
        console.log ("created tasks");
    }catch (error){
        throw error
    }
}

const createInitialTodayslists=async ()=>{
    try{
        for (const todayslist of todayslists){
            await createTodayslist (todayslist)
        }
        console.log("created todayslists")
    } catch (error){
        throw error
    }
}

//call functions to build database
const rebuildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTables();

    console.log("starting to seed...");
    await createInitialSchedules();
    await createInitialLists();
    await createInitialTasks();
    await createInitialTodayslists();
    console.log("created todolist");
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

rebuildDb();
