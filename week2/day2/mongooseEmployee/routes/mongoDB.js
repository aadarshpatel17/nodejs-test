const mongoose = require('mongoose')

// mongoose.connect()

const { Schema } = mongoose;

const employeDB = new Schema( {
    name: String,
    etype: String,
    hourlyRate: Number,
    workingHour: Number
})

const employeModel = mongoose.model('employee', employeDB)

employeDB.methods.totalSalary = function() {
    console.log(`Total Salary: $${this.hourlyRate * this.workingHour}`);
}

var employee = new employeModel({
    name: 'Tony Stark',
    etype: 'Mechanic',
    hourlyRate: 100,
    workingHour: 20
})

console.log(employee);

// employee.totalSalary()