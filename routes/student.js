const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth')
const studentController = require('../controller/studentController');
const upload = require('../config/multer');

router.post('/save',authMiddleware.authenticateToken,upload.single('file'),studentController.createStudent);
router.put('/update/:studentId',authMiddleware.authenticateToken,upload.single('file'),studentController.updateStudent);
router.get('/fetchAll',authMiddleware.authenticateToken,studentController.getStudents);
router.get('/fetch/:studentId',authMiddleware.authenticateToken,studentController.getStudentById);
router.delete('/delete/:studentId',authMiddleware.authenticateToken,studentController.deleteStudentById);

module.exports = router;