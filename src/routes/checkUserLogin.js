var express = require('express');
var router = express.Router();
var ContactData = require('../../clgDataMogo/addUserDataSchema')


router.post('/logincheck', function (req, res, next) {
	console.log("request reached", req)
	ContactData.findOne({ email: req.body.email }, function (err, data) {
		console.log(JSON.stringify(data.avilableCertificates[0].graduationCertificate[0].grade));

		if (data) {

			if (data.password == req.body.password&&data.firstName==req.body.fname&&data.adharNumber==req.body.id) {
				//console.log("Done Login");
				// req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send("Success!" + data);
				const info=JSON.stringify(data)
				return info
				// return [req.body,req.password];

			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}

	});
});


module.exports = router;
export info;