var express = require('express');

var studentModel = require('../models/studentDB');

var router = express.Router();


const fileUpload = require('express-fileupload');
const xlsx = require('xlsx');

router.use(fileUpload());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Upload' });
});

router.post('/', (req, res) => {
  if(req.files) {
      var file = req.files.file;
      var fileName = file.name
      file.mv('./uploads/' + fileName, function(err) {
          if(err) throw err;
          var workBook = xlsx.readFile('./uploads/'+fileName, { cellDates: true });
          var sheet = workBook.SheetNames[0];
          var workSheet = workBook.Sheets[sheet];

          var data = xlsx.utils.sheet_to_json(workSheet)

          data.map((row) => {

            var newStudent = new studentModel({
              id: row.ID,
              fname: row.FNAME,
              lname: row.LNAME,
              class: row.CLASS,
              doa: row.DOA
            })

            newStudent.save(function(err, data) {
              if(err) throw err;
            })

          }) 

          res.render('showData', { title: 'Data', records: data });
      })
  }
});

module.exports = router;
