const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var departmentModel = require('../models/department.js');

router.post('/departmentAdd', (request, response) => {
  console.log("request", request);
  var user = new departmentModel({
    deptID: request.body.deptID,
    deptName: request.body.deptName,
    deptIntake:request.body.deptIntake
  });
  user.save().then(success => {
    console.log("Successfully created a new department", success);
    var obj={
      "statusCode":200,
      "message":"successfully created a new department",
      "record": success
    };
    response.send(obj);
  }).catch(error => {
    var obj = {
      "statusCode": 500,
      "message": error
    };
    response.send(obj);
  })
});

module.exports = router;