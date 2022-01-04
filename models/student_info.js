const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
     StudentId: {type:String},
     FirstName: {type:String},
     LastName:{type:String},
     DOB:{type:String},
     YOJ:{type:String},
     PhoneNo:{type:String},
     DeptId:{type:String},
     Status:{type:String},
     Semester:{type:String},
     Address:{type:String},
     Gender:{type:String}
})

module.exports = mongoose.model('student', studentSchema);