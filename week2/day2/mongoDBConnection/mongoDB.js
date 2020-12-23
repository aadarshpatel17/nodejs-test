const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true})

var con = mongoose.connection;

// const { schema } = mongoose;

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    workingHour: Number,
    hourlyRate: Number,
    total: Number
})

employeeSchema.methods.totalSalary =  function() {
    return this.workingHour * this.hourlyRate;
}

var employeeModel = mongoose.model('Employee', employeeSchema)
var employees = new employeeModel({
    name: 'Ramesh Sharma',
    email: 'abc@gmail.com',
    age: 14,
    workingHour: 12,
    hourlyRate: 200
})

employees.total = employees.totalSalary()

con.on('connected', function() {
    console.log('Connected Successfully!');
})

con.on('disconnected', function() {
    console.log('Disconnected Successfully!');
})

con.on('error', console.error.bind(console, 'connection error:'))

con.once('open', function() {
    // employees.save(function(err, res) {
    //     if(err)     throw error;
    //     con.close()
    // })
    employeeModel.findOneAndUpdate({name: 'Tony Stark'},{total: 21*100}, function(err, data) {
        if(err) throw err;
        console.log(data);
        con.close();
    })
})