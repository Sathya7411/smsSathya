const mongoose = require('mongoose');
const departmentSchema = mongoose.Schema({
     deptID: { type: String },
     deptName: { type: String },
     deptIntake:{type: String},
})

module.exports = mongoose.model('department', departmentSchema);