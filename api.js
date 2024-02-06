const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');
const userRoutes = require('./routes/authRouter');



// Connecting to database
const db = "mongodb://localhost:27017/College"

mongoose.Promise = global.Promise;

mongoose.connect(db)
.then(() => console.log("Connected Successfully"))
.catch((err) => console.log(err));

router.use('/students', studentRoutes);
router.use('/users', userRoutes)


module.exports = router;
