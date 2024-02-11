'use strict'

const sql = require('sqlite3');
const util = require('util');

// Create new database object
const db = new sql.Database("activities.db");

// Check if database exists
let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='ActivityTable' ";

db.get(cmd, function(err, val) {
    if (val == undefined) {
        console.log("No database file - creating one");
        createActivityTable();
    }
    else {
        console.log("Database file found");
    }
});

// Called to create table
function createActivityTable() {
    const cmd = 'CREATE TABLE ActivityTable (rowIdNum INTEGER PRIMARY KEY, activity TEXT, date INTEGER, amount FLOAT)';
    db.run(cmd, function(err, val) {
        if (err) {
            console.log("Database create failure", err.message);
        }
        else {
            console.log("Created database");
        }
    });
}

// Wrap all database commands in promises
db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);

// Empty all data from db
db.deleteEverything = async function() {
    await db.run("delete from ActivityTable");
    db.run("vacuum");
}

// Allow code in index.js to use the db object
module.exports = db;