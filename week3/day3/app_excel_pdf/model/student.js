const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NEWSTUDENT', { useNewUrlParser: true, useUnifiedTopology: true });

var studentSchema = mongoose.Schema({
    id: Number,
    fname: String,
    lname: String,
    class: Number,
    doa: Date
});

var studentModel = mongoose.model('studentData', studentSchema);

module.exports = studentModel;