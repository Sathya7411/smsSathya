const mongoose = require('mongoose');
const marks_infoSchema = mongoose.Schema({
     studentID: { type: String },
     courseID: { type: String },
     marks:{type: String},
     semester:{type:String},
})

module.exports = mongoose.model('marks', marks_infoSchema);