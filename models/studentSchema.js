const mongoose = require('mongoose');
 
const studentSchema = new mongoose.Schema({
    studentId: Number,
    name: String,
    roll: Number,
    birthday: Date,
    address: String,
    mobile : String,
    city : String,
    file : String
});
 
module.exports = mongoose.model(
    'student', studentSchema, 'Students');
