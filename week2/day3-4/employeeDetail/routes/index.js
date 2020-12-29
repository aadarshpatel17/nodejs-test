var express = require('express');
var employeeModel = require('../modules/employee')
var router = express.Router();

var employee = employeeModel.find({})

/* GET home page. */
router.get('/', function(req, res, next) {
  employee.exec(function(err, data) {
    if(err)   throw err
    res.render('index', { title: 'Employee Records', records: data });
  })
});

router.post('/', function(req, res, next) {

  var empDetail = employeeModel({
    name: req.body.uname,
    email: req.body.email,
    etype: req.body.emptype,
    hourlyRate: req.body.hrlyrate,
    totalHour: req.body.ttlhr,
    total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr),
  })

  empDetail.save(function(err, res1) {
    if(err) throw err;
    employee.exec(function(err, data) {
      if(err)   throw err;
      res.render('index', { title: 'Employee Records', records: data });
    })
  })
})

router.post('/search/', function(req, res, next) {

  var fltrName = req.body.fltrname
  var fltrEmail = req.body.fltremail
  var fltrEType = req.body.fltremptype

  if(fltrName != '' && fltrEmail != '' && fltrEType != '') {
    var filterParameter =  {
      $and: [{ name: fltrName }, { $and:[{ email: fltrEmail }, { etype: fltrEType }]} ]
    }
  }
  else if(fltrName == '' && fltrEmail != '' && fltrEType != '') {
    var filterParameter =  {
      $and: [{  email: fltrEmail }, { etype: fltrEType } ]
    }
  }
  else if(fltrName != '' && fltrEmail == '' && fltrEType != '') {
    var filterParameter =  {
      $and: [{  name: fltrName }, { etype: fltrEType } ]
    }
  }  
  else if(fltrName == '' && fltrEmail == '' && fltrEType != '') {
    var filterParameter =  {
      etype: fltrEType
    }
  }
  else {
    var filterParameter = {}
  }



    employeeFilter = employeeModel.find(filterParameter)

    employeeFilter.exec(function(err, data) {
      if(err)   throw err;
      res.render('index', { title: 'Employee Records', records: data });
    })
})


router.get('/delete/:id', function(req, res, next) {
  var del = employeeModel.findByIdAndDelete(req.params.id)

  del.exec(function(err, data) {
    if(err)   throw err
    res.redirect('/')
  })
})

router.get('/edit/:id', function(req, res, next) {
  var edit = employeeModel.findById(req.params.id)

  edit.exec(function(err, data) {
    if(err)   throw err;
    res.render('edit', { title: 'Edit Employee Record', records: data })
  })
})

router.post('/update/', function(req, res, next) {
  var update = employeeModel.findByIdAndUpdate(req.body.id, {
    name: req.body.uname,
    email: req.body.email,
    etype: req.body.emptype,
    hourlyRate: req.body.hrlyrate,
    totalHour: req.body.ttlhr,
    total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr),
  })

  update.exec(function(err, data) {
    if(err) throw err;
    res.redirect('back')
  })
})


module.exports = router;