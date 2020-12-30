const router = require('express').Router();
const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.post('/', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    var documentDefinition = {
        contents: [
            `Hello ${firstName} ${lastName}`,
            `Good to see you!`
        ]
    }

    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data) => {
        res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="filename.pdf"'
        })

        const download = Buffer.from(data.toString('utf-8', 'base64'));
        res.end(download)
    });
});

module.exports = router;