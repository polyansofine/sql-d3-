const db = require("./db");
const helper = require("../helper");
const moment = require("moment");
const today = new Date();

async function getLogs() {
  const logs = await db.query(`SELECT * FROM log ORDER BY time DESC`);
  const data = helper.emptyOrRows(logs);
  const sensor_id = await db.query(`SELECT DISTINCT sensor_id FROM log`);

  return { data, sensor_id };
}
async function getFilterLogs(location, period) {
  console.log("period=", period[0], period[1], location);
  let rows = [];
  let data = [];
  // const offset = helper.getOffset(page, config.listPerPage);
  if (location == -1 && period != [null, null]) {
    console.log("location-1");
    rows = await db.query(
      `SELECT * 
      FROM log 
      WHERE sensor_id and time BETWEEN "${moment(period[0]).format(
        "YYYY-MM-DD"
      )}" AND "${moment(period[1]).format("YYYY-MM-DD")}" ORDER BY time DESC`
    );
    data = helper.emptyOrRows(rows);
  }
  if (location != -1 && period[0] !== null && period[1] !== null) {
    console.log("location-2");

    rows = await db.query(
      `SELECT * 
      FROM log 
      WHERE sensor_id = ${location} and time BETWEEN "${moment(
        period[0]
      ).format("YYYY-MM-DD")}" AND "${moment(period[1]).format(
        "YYYY-MM-DD"
      )}" ORDER BY time DESC`
    );
    data = helper.emptyOrRows(rows);
  }
  if ((location != -1 && period[0] == null, period[1] == null)) {
    console.log("helo");
    rows = await db.query(
      `SELECT * 
      FROM log 
      WHERE sensor_id = ${location} ORDER BY time DESC`
    );
    data = helper.emptyOrRows(rows);
  }

  //   const limit = await db.query(`SELECT * FROM settings`);
  const sensor_id = await db.query(`SELECT DISTINCT sensor_id FROM log`);

  return {
    data,
    sensor_id,
  };
}

// async function getMonthData() {
//   const rows = await db.query();
//   const data = helper.emptyOrRows(rows);
//   return {
//     data,
//   };
// }

module.exports = {
  getLogs,
  getFilterLogs,
};
