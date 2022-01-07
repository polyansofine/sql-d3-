var express = require("express");
var router = express.Router();
var data = require("../services/data");
var log = require("../services/logs");
const moment = require("moment");
const config = require("../config");
const helper = require("../helper");
const db = require("../services/db");

/* GET home page. */

router.get("/api/getData", async function (req, res, next) {
  try {
    res.json(await data.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});
router.post("/api/filterData", async function (req, res, next) {
  console.log("reqbody====", req.body);
  try {
    res.json(await data.getFilterData(req.body.location, req.body.period));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

// ==========logs=========================== ===================

router.get("/api/getLogs", async function (req, res, next) {
  try {
    res.json(await log.getLogs());
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});
router.post("/api/filterLogs", async function (req, res, next) {
  console.log("reqbody====", req.body);
  try {
    res.json(await log.getFilterLogs(req.body.location, req.body.period));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.post("/api/admin/login", async (req, res, next) => {
  try {
    const data = await db.query(`SELECT value FROM settings
    WHERE id=1`);
    if (req.body.pass == data[0].value) {
      res.status(200).json(data[0].value);
    } else {
      res.status(400).json({ msg: "password wrong" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
router.get("/api/admin/getEmail", async (req, res) => {
  try {
    const data = await db.query(`SELECT value FROM settings
    WHERE id=2 OR id=3`);

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
router.get("/api/admin/getLimits/:id", async (req, res) => {
  const location_id = req.params.id;
  try {
    const data = await db.query(`SELECT * FROM clients
    WHERE location_id = "${location_id}"`);
    console.log("limits===", data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
router.post("/api/admin/emailUpdate", async (req, res) => {
  const { notify_email, sec_email } = req.body;
  try {
    await db.query(`UPDATE settings
      SET value = "${notify_email}"
      WHERE id = 2`);
    await db.query(`UPDATE settings
      SET value = "${sec_email}"
      WHERE id = 3`);
    const data = await db.query(`SELECT value FROM settings
    WHERE id=2 OR id=3`);
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
router.post("/api/admin/updateLimits", async (req, res) => {
  // console.log("update=", req.body);
  const {
    t_day_threshold,
    t_night_threshold,
    t_alert_threshold,
    h_day_threshold,
    h_night_threshold,
    h_alert_threshold,
    l_day_threshold,
    l_night_threshold,
    l_alert_threshold,
    s_day_threshold,
    s_night_threshold,
    s_alert_threshold,
    settings_upd_time,
    location_id,
  } = req.body;
  try {
    await db.query(`UPDATE clients
       SET  t_day_threshold = "${t_day_threshold}",
            t_night_threshold = "${t_night_threshold}",
            t_alert_threshold = "${t_alert_threshold}",
            h_day_threshold = "${h_day_threshold}",
            h_night_threshold = "${h_night_threshold}",
            h_alert_threshold = "${h_alert_threshold}",
            l_day_threshold = "${l_day_threshold}",
            l_night_threshold = "${l_night_threshold}",
            l_alert_threshold = "${l_alert_threshold}",
            s_day_threshold = "${s_day_threshold}",
            s_night_threshold = "${s_night_threshold}",
            s_alert_threshold = "${s_alert_threshold}",
            settings_upd_time = "${settings_upd_time}"
      WHERE location_id = "${location_id}"`);
    // await db.query(`UPDATE settings
    //   SET value = "${notify_email}"
    //   WHERE id = 2`);
    // await db.query(`UPDATE settings
    //   SET value = "${sec_email}"
    //   WHERE id = 3`);
    const data = await db.query(`SELECT * FROM clients
    WHERE location_id = "${location_id}"`);
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
