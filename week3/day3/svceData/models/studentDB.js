const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Students', {useNewUrlParser: true, useUnifiedTopology: true});

const studentSchema = mongoose.Schema ({
    id: Number,
    name: String,
    fname: String,
    gender: String,
    email: String,
    dob: Date,
    doa: Date
});

const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;