const express = require('express');
const router = express.Router();
const pdf = require('html-pdf');
const pdfCongestion = require('../../documents/congestions-pdf-template');
const path = require('path');

router.post('/documents/congestions', (req, res) => {
	console.log(__dirname);
	pdf.create(pdfCongestion(req.body, {})).toFile(
		`${__dirname}../../../documents/pdfs/congestions-${req.body.reportId}.pdf`,
		(err) => {
			console.log(err);
			if (err) {
				res.json({
					error: false,
					message: 'Something went wrong',
				});
			} else {
				console.log('generated');
				res.sendFile(
					path.join(
						__dirname,
						`../../documents/pdfs/congestions-${req.body.reportId}.pdf`
					)
				);
			}
		}
	);
});

module.exports = router;
