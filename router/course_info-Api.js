const express = require("express")
var mongoose = require("mongoose");
const router = express.Router();
var courseModel = require('../models/course_info.js');

router.post('/courseAdd', (request, response) => {
  console.log("request", request);
  var user = new courseModel({
    CourseID:request.body.courseID,
    CourseName:request.body.courseName,
    DeptId:request.body.deptId,
    Semester:request.body.semester,

  });
  user.save().then(success => {
    console.log("successfully created a new course", success);
    var obj={
      "statusCode":200,
      "message":"successfully created a new course",
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