
//Department Schema 
const mongoose = require('mongoose');
const course_infoSchema = mongoose.Schema({
     CourseID: { type: String },
     CourseName: { type: String },
     DeptId:{type: String},
     Semester:{type: String},
})

module.exports = mongoose.model('course', course_infoSchema);
