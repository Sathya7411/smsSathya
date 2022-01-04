const express = require("express")
var mongoose = require("mongoose");
const router = express.Router();
var app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var department = require('./models/department.js');
var departmentApi = require('./router/department-Api.js');

var student = require('./models/student_info.js');
var studentApi = require('./router/student_info-Api.js');

var course = require('./models/course_info.js');
var courseApi = require('./router/course_info-Api.js');

var marksModel = require('./models/marks_info.js');
var marksApi = require('./router/marks_info-Api.js');

const {application} = require("express");

app.use('/', router);
app.get("/",function(request,response){
response.send("Hello World!")
})

mongoose.connect('mongodb://localhost:27017/studentmanagement', () => { console.log("[+] Succesfully connected to database."); });
app.listen(3000, function () {
console.log("Started application on port %d", 3000);
});

app.use('/', departmentApi);
app.use('/', studentApi);
app.use('/', courseApi); 
app.use('/', marksApi); 