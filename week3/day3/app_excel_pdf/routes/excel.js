const router = require('express').Router();
const studentModel = require('../model/student');

const fileUpload = require('express-fileupload');
const xlsx = require('xlsx');

router.use(fileUpload());

router.post('/create', (req, res) => {
    res.send('CREATE WORKING!!!');
})

router.post('/read', (req, res) => {

    if(req.files) {
        var file = req.files.file;
        var fileName = file.name;

        file.mv('./uploadsExcel/' + fileName, (err) => {
            if(err) throw err;
            var workBook = xlsx.readFile('./uploadsExcel/' + fileName, { cellDates: true });
            var sheet = workBook.SheetNames[0]
            var workSheet = workBook.Sheets[sheet]
            var data = xlsx.utils.sheet_to_json(workSheet);

            data.map((row) => {
                var newStudent = new studentModel({
                    id: row.ID,
                    fname: row.FNAME,
                    lname: row.LNAME,
                    class: row.CLASS,
                    doa: row.DOA
                })

                newStudent.save((err, data) => {
                    if(err) throw err;
                    console.log("INSERTED TO DB!!!");
                })
            })

            res.render('readExcel', { title: 'EXCEL TO TABLE FORMAT', records: data });
        })
    }

})

module.exports = router;