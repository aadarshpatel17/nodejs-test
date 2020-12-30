const express = require('express')
const fileUpload = require('express-fileupload');
const xlsx = require('xlsx');

const app = express();

const PORT = process.env.PORT || 3000;

// const PATH = __dirname + '/uploads/';

app.use(fileUpload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index')
});

app.post('/', (req, res) => {
    if(req.files) {
        var file = req.files.file;
        var fileName = file.name
        file.mv('./uploads/' + fileName, function(err) {
            if(err) throw err;

            var workBook = xlsx.readFile(__dirname + '/uploads/' + fileName, { cellDates: true });
            var sheet = workBook.SheetNames[0];
            var workSheet = workBook.Sheets[sheet];

            var data = xlsx.utils.sheet_to_json(workSheet)

            data.map((rows) => {
                console.log(rows.ID);
            })

            res.send(data)

            // res.sendFile(__dirname + '/views/showData', { title: 'Data', records: data });
        })
    }
});

app.get('/showData', (req, res) => {
    res.sendFile(__dirname + '/views/showData.ejs');
})

app.listen(PORT);