var express = require("express");
var router = express.Router();
var data = require("../services/data");
var log = require("../services/logs");

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

module.exports = router;
