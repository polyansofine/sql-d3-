const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const moment = require("moment");
const today = new Date();
console.log("today=", today);
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM sensor_data WHERE record_id BETWEEN "${moment(new Date()).format(
      "YYYY-MM-DD"
    )} 00:00:00" AND "${moment(new Date()).format("YYYY-MM-DD")} 23:59:59"`
  );
  const limit = await db.query(`SELECT * FROM settings`);
  const sensor_id = await db.query(
    `SELECT DISTINCT sensor_id FROM sensor_data`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    limit,
    sensor_id,
    meta,
  };
}
async function getFilterData(location, period) {
  console.log("period=", period[0], period[1]);
  let rows = [];
  let data = [];
  // const offset = helper.getOffset(page, config.listPerPage);
  if (location == -1 && period[0] !== null && period[1] !== null) {
    rows = await db.query(
      `SELECT * 
      FROM sensor_data 
      WHERE sensor_id and record_id BETWEEN "${moment(period[0]).format(
        "YYYY-MM-DD"
      )}" AND "${moment(period[1]).format("YYYY-MM-DD")}"`
    );
    data = helper.emptyOrRows(rows);
  }
  if (location != -1 && period[0] !== null && period[1] !== null) {
    rows = await db.query(
      `SELECT * 
      FROM sensor_data 
      WHERE sensor_id = ${location} and record_id BETWEEN "${moment(
        period[0]
      ).format("YYYY-MM-DD")}" AND "${moment(period[1]).format("YYYY-MM-DD")}"`
    );
    data = helper.emptyOrRows(rows);
  }
  if (location != -1 && period[0] == null && period[1] == null) {
    console.log("helo");
    rows = await db.query(
      `SELECT * 
      FROM sensor_data 
      WHERE sensor_id = ${location} AND record_id BETWEEN "${moment(
        new Date()
      ).format("YYYY-MM-DD")} 00:00:00" AND "${moment(new Date()).format(
        "YYYY-MM-DD"
      )} 23:59:59"`
    );
    data = helper.emptyOrRows(rows);
  }

  const limit = await db.query(`SELECT * FROM settings`);
  const sensor_id = await db.query(
    `SELECT DISTINCT sensor_id FROM sensor_data`
  );

  return {
    data,
    limit,
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
  getMultiple,
  getFilterData,
};
