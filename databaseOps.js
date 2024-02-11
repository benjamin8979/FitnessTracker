'use strict'

const db = require('./sqlWrap');

// SQL commands for ActivityTable
const insertDB = "insert into ActivityTable (activity, date, amount) values (?,?,?)";
const getOneDB = "select * from ActivityTable where activity = ? and date = ? and amount = ?";
const allDB = "select * from ActivityTable where activity = ?";
const getFutureDB = "select * from ActivityTable where amount = -1";
const deletePastDB = "delete from ActivityTable where amount = -1 and date < ?";
const newestEntryDB = "select * from ActivityTable order by rowIdNum desc";
const getWeekDB = "select * from ActivityTable where activity = ? and date between ? and ?";

async function testDB() {
    const today = new Date().getTime();
    // empty out database
    await db.deleteEverything();
    await db.run(insertDB,["running",today,2.4]);
    await db.run(insertDB,["walking",today,1.1]);
    await db.run(insertDB,["walking",today,2.7]);
    console.log("inserted two items");
    // look at the item we just inserted
    let result = await db.get(getOneDB,["running",today,2.4]);
    console.log(result);

    // get multiple items as a list
    result = await db.all(allDB,["walking"]);
    console.log(result);
}

async function storeDB(activity, date, amount) {
    await db.run(insertDB, [activity,date,amount]);
    let result = await db.get(getOneDB, [activity,date,amount]);
    console.log(result);
}

async function getDB() {
    let result = await db.all(getFutureDB);
    console.log(result);
    let mostRecent = result[0];
    console.log("First element: ", mostRecent);
    for (let i = 0; i < result.length; i++) {
        if (result[i].date < mostRecent.date) {
            mostRecent = result[i];
        }
    }
    console.log("Most recent: ", mostRecent);
    const today = new Date().getTime();
    await db.all(deletePastDB,[today]);
    return mostRecent;
}

async function latestActivityDB() {
    let activities = await db.all(newestEntryDB);
    console.log(activities);
    let latest = activities[0].activity;
    return latest;
}

async function pastWeekDB(activity, date) {
    try {
        const today = new Date().getTime();
        let dayLength = 8.64E7;
        let chosenActivity = activity;
        console.log("Activity: ", chosenActivity);
        if ((today-date) < dayLength) {
            return "Date is too late to display data";
        }
        let weekList = await db.all(getWeekDB, [chosenActivity,date-(dayLength*7),date]);
        console.log("LB: ", date-(dayLength*7));
        console.log("UB: ", date);
        console.log("weekList: ", weekList);
        return weekList;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports.testDB = testDB;
module.exports.storeDB = storeDB;
module.exports.getDB = getDB;
module.exports.pastWeekDB = pastWeekDB;
module.exports.latestActivityDB = latestActivityDB;