const StudentModel = require('../models/studentSchema');

// for creating students data 

const createStudent = async (req, res)  => {

    try {
        const {studentId , name , roll, birthday ,address} = req.body;
        const studentData = await StudentModel.create({
            studentId : studentId,
            name : name,
            roll : roll,
            birthday : birthday,
            address : address
        });
        return res.status(200).json({status : 200, message : 'Data Inserted', data : studentData});
    } catch (error) {
        return res.status(500).json({status : 500, message : error.message});
    }
   
};

// for update the specific student Record

const updateStudent = async (req, res)  => {

    try {
        const { studentId } = req.params;
        const updateData = req.body;
        const updatedStudent = await StudentModel.findOneAndUpdate(
            { studentId },
            updateData,
            { new: true }
        );
        return res.status(200).json({status : 200, message : 'Data Updated'});
    } catch (error) {
        return res.status(500).json({status : 500, message : error.message});
    }
   
};

// for Reterieving all the records 

const getStudents = async (req,res) => {
    try {
        const studentData = await StudentModel.find();
        return res.status(200).json({status : 200, message : 'Data Fetched', data : studentData});
    } catch (error) {
        return res.status(500).json({status : 500, message : error.message});
    }
   
};

// for Reterieving specific record

const getStudentById = async (req,res) => {
    try {
        const { studentId } = req.params;
        const studentData = await StudentModel.findOne({ studentId });
        if(!studentData){
            return res.status(404).json({status : 404, message : 'Student Not Found'});
        }
        return res.status(200).json({status : 200, message : 'Student Found', data : studentData});
    } catch (error) {
        return res.status(500).json({status : 500, message : error.message});
    }
   
};


// for Deleting specific record


const deleteStudentById = async (req,res) => {
    try {
        const { studentId } = req.params;
        const studentData = await StudentModel.findOneAndDelete({ studentId });
        if(!studentData){
            return res.status(404).json({status : 404, message : 'Student Not Found'});
        }
        return res.status(200).json({status : 200, message : 'Deleted Successfully'});
    } catch (error) {
        return res.status(500).json({status : 500, message : error.message});
    }
   
};


module.exports = {createStudent ,updateStudent, getStudents , getStudentById , deleteStudentById};