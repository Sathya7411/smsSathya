const express = require("express")
var mongoose = require("mongoose");
const router = express.Router();
var studentmodel = require('../models/student_info.js');

router.post('/studentAdd', (request, response) =>{
  console.log("request", request);

  
  if(request.body.StudentId===""){
    var obj={
      "statuscode":400,
      "message":"Student id should be here "
    };
    response.send(obj);
    return;
  }
  if(request.body.FirstName===""){
    var obj={
      "statuscode":400,
      "message":"FirstName should be here "
    };
    response.send(obj);
    return;
  }
  console.log(request.body.FirstName.length);
  if(request.body.FirstName.length > 25){
    var obj={
      "statuscode":400,
      "message":"FN  should be only less than 25 "
    };
    response.send(obj);
    return;
  }
  if(request.body.LastName===""){
    var obj={
      "statuscode":400,
      "message":"LastName should be here "
    };
    response.send(obj);
    return;
  }
  console.log(request.body.LastName.length);
  if(request.body.LastName.length > 25){
    var obj={
      "statuscode":400,
      "message":"LastName  should be only less than 25 "
    };
    response.send(obj);
    return;
  }

  if(request.body.DOB===""){
    var obj={
      "statuscode":400,
      "message":"DOB should be here "
    };
    response.send(obj);
    return;
  }
  var currentTime=new Date();
  var year=currentTime.getFullYear();
  console.log("YEAR",year-18);
  var DOB=request.body.DOB;
  var lastFour=DOB.substr(DOB.length-4);
  console.log(year-18,lastFour);

  if(lastFour>year-18){
    var obj={
      "statuscode":400,
      "message":"AGE  should be 18 yrs "
    };
    response.send(obj);
    return;
  }

  var currentTime=new Date();
  var year=currentTime.getFullYear();
  console.log("YEAR",year-25);
  var DOB=request.body.DOB;
  var lastFour=DOB.substr(DOB.length-4);
  console.log(year-25,lastFour);

  if(lastFour<year-25){
    var obj={
      "statuscode":400,
      "message":"You are too old "
    };
    response.send(obj);
    return;
  }

  if(request.body.YOJ===""){
    var obj={
      "statuscode":400,
      "message":"YOJ should be here "
    };
    response.send(obj);
    return;
  }

  var currentTime=new Date();
  var year=currentTime.getFullYear();
  console.log("YEAR",year)
  var YOJ=request.body.YOJ;

  if(YOJ>year){
    var obj={
      "statuscode":400,
      "message":" YOJ cant be crossed current year "
    };
    response.send(obj);
    return;
  }
  if(request.body.Address===""){
    var obj={
      "statuscode":400,
      "message":"Address should be here "
    };
    response.send(obj);
    return;
  }
  if(request.body.Gender===""){
    var obj={
      "statuscode":400,
      "message":"Gender should be here "
    };
    response.send(obj);
    return;
  }
  if(request.body.Status===""){
    var obj={
      "statuscode":400,
      "message":"Status should be here "
    };
    response.send(obj);
    return;
  }
  if(request.body.DeptId ===""){
    var obj={
      "statuscode":400,
      "message":"DeptId should be here "
    };
    response.send(obj);
    return;
  }
  console.log(request.body.DeptId);
  
  
  if(request.body.PhoneNo === ""){
    var obj={
      "statuscode":400,
      "message":"Phone No should be here "
    };
    response.send(obj);
    return;
  }
   console.log(request.body.PhoneNo.length);
  if(request.body.PhoneNo.length !=10){
    var obj={
      "statuscode":400,
      "message":"PhoneNo should be correct"
    };
    response.send(obj);
    return;
  }
  if(request.body.DeptId=="ME"|| request.body.DeptId =="CS"|| request.body.DeptId=="CE"){
    if(request.body.Status=="Active" || request.body.Status=="InActive"){
      if(request.body.Gender=="M"||request.body.Gender=="F"){
        if(request.body.Semester=="1st"||request.body.Semester=="2nd"||request.body.Semester=="3rd"||request.body.semester=="4th"||request.body.Semester=="5th"||request.body.Semester=="6th"||request.body.Semester=="7th"||request.body.Semester=="8th")
 {

    
  var user = new studentmodel({
    StudentId: request.body.StudentId,
    FirstName: request.body.FirstName,
    LastName:request.body.LastName,
    DOB:request.body.DOB,
    YOJ:request.body.YOJ,
    PhoneNo:request.body.PhoneNo,
    DeptId:request.body.DeptId,
    Status:request.body.Status,
    Semester:request.body.Semester,
    Address:request.body.Address,
    Gender:request.body.Gender
  });
  user.save().then(success => {
    console.log("Successfully created a new student", success);
    var obj = {
      "statusCode":200,
      "message": "successfully created a new student",
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

}else{
  var obj={
    "statuscode":400,
    "message":"Semester should be  1st ,2nd ,3rd ,4th, 5th ,6th, 7th or 8th semseter "
  };
  response.send(obj);
  return;
}
}else{
  var obj={
    "statuscode":400,
    "message":"Gender should be M or F "
  };
  response.send(obj);
  return;

}
}else{
  var obj={
    "statuscode":400,
    "message":"Status should be only ACTIVE OR INACTIVE "
  };
  response.send(obj);
  return;
}
}else{
  var obj={
    "statuscode":400,
    "message":"DeptId  should be only CS,CE,ME "
  };
  response.send(obj);
  return;
}
});
  //aPI to get all checklist
  router.post('/getStudentList', (request,response) => {
    studentmodel
    .findOne({StudentId:request.body.StudentId})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the students details",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });


router.get('/studentGet',(request,response)=> {
  studentmodel
  .find()
  .lean()
  .exec()  
  .then(function(success){
    if(success){
     let obj ={
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
    };
    response.status(500).send(obj);
  });
});

router.post('/studentGetbyID',(request,response)=>{
studentmodel
.findById({_id: request.body._id})
.lean()
.exec()
.then(function(success){
 if (success){
   let obj = {
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
})

});

router.post('/studentDelete',(request,response)=>{
  studentmodel.deleteOne({studentId:request.body.studentId})
  .exec()
  .then(function(success){
   if (success){
     let obj = {
    "statuscode":200,
    "message":"successfully delete the details",
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
  })
  
  });

  router.post('/studentUpdate',(request,response) => {
    studentmodel
    .findOneAndUpdate({studentId: request.body.studentId})
    .exec()
    .then(function (success) {
      if (success) {
        console.log("successfully modify details",success);
        if (request.body.FirstName){
          success['FirstName']=request.body.FirstName;
        }
        if(request.body.LastName){
          success['LastName']=request.body.LastName; 
        }
        if (request.body.PhoneNo){
          success['PhoneNo']=request.body.PhoneNo;
        }
        if (request.body.Address){
          success['Address']=request.body.Address;
        }

        console.log("afterUpdate",success);
        success.save().then(data =>{
          console.log("successfully modify student", success);
          var obj = {
            "statusCode":200,
            "message": "successfully updated student",
            "record":data
          };
          response.send(obj);
        })
        .catch(error =>{
          var obj ={
            "statusCode":500,
            "message":error
          };
          response.send(obj);
        })
      } 
    })
    .catch(function(error) {
      let obj = {
        "statusCode":500,
        "message":error
      };
      response.status(500).send(obj);
    });
  });


 




module.exports = router;

