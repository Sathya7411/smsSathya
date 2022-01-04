const express = require("express")
var mongoose = require("mongoose");
const router = express.Router();
var marksModel = require('../models/marks_info.js');

router.post('/marksAdd', (request, response) => {
  console.log("request", request);
  var user = new marksModel({
    studentID:request.body.studentID,
    courseID:request.body.courseID,
    marks:request.body.marks,
    semester:request.body.semester,

  });
  user.save().then(success => {
    console.log("successfully created a new marks", success);
    var obj={
      "statusCode":200,
      "message":"successfully created a new marks",
      "record": success
    };
    response.send(obj);
  }).catch(error => {
    var obj = {
      "statusCode": 500,
      "message": error
    };
    response.send(obj);
  });
});

router.post('/getstudentMarkslist', (request, response) => {
marksModel
.find({studentID: request.body.studentID})
.lean()
.exec()
.then(function(success){
 if (success){
   var obj = {
  "statuscode":200,
  "message":"successfully getting the students details",
  "record":success
   };
   response.status(200).send(obj);
  }
})
.catch(function(error){
  let obj = {
    "statuscode":500,
    "message":error
  };
  response.status(500).send(obj);
});

});

router.get('/getcollegeMarkslist', (request, response) => {
  marksModel
  .find()
  .lean()
  .exec()
  .then(function(success){
   if (success){
     var obj = {
    "statuscode":200,
    "message":"successfully getting the students details",
    "record":success
     };
     response.status(200).send(obj);
    };
  })
  .catch(function(error){
    let obj = {
      "statuscode":500,
      "message":error
    };
    response.status(500).send(obj);
  });
  
  });

  router.get('/getindividuallist', (request, response) => {
    marksModel
    .find({courseID:request.body.courseID})
    .lean()
    .exec()
    .then(function(success){
     if (success){
       var obj = {
      "statuscode":200,
      "message":"successfully getting the details",
      "record":success
       }
       response.status(200).send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      }
      response.status(500).send(obj);
    });
    
    });

    router.post('/getsemestermarks', (request, response) => {
      marksModel
      .find({semester:request.body.semester})
      .lean()
      .exec()
      .then(function(success){
       if (success){
         var obj = {
        "statuscode":200,
        "message":"successfully getting the details",
        "record":success
         }
         response.status(200).send(obj);
        }
      })
      .catch(function(error){
        let obj = {
          "statuscode":500,
          "message":error
        }
        response.status(500).send(obj);
      });
      
      });

module.exports = router;