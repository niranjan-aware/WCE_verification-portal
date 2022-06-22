const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const hbs = require("hbs")
const blockChainSchema = require('../blockchain/blkSchema')
const { Blockchain } = require('../blockchain/createBlockchain')
const { Block } = require('../blockchain/createBlockchain')

// require('./db/mongoose')
// require('../clgDataMogo/mongoose')
require('../clgDataMogo/mongoose')
const dataRouter = require('./routes/userSignIn')
// const loginValidationRouter=require('./routes/userLoginRoute')
// const loginValidationRouter=require('./routes/checkUserLogin')
// const userDetailRoute=require('./routes/userLoginRoute')
// const userAvailableDcos=require('./routes/getavailableDocs')
const ContactData = require('../clgDataMogo/addUserDataSchema')
const { Console } = require('console')


const app = express();
const port = process.env.PORT || 3000;
const { urlencoded, query } = require("express");
const { checkPrime } = require('crypto')
const view_path = path.join(__dirname, "../views");
// const partial_path = path.join(__dirname, "../mernbackend/templates/patials");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("../mernbackend/public"));

app.set("view engine", "hbs");
app.set("views", view_path);
// hbs.registerPartials(partial_path);
app.get('/', function (req, res, next) {
	res.render("home")
})


app.get('/downloadcomplete', function (req, res, next) {
	res.render("downloadcomplete")
})

let FOO
app.post('/logincheck', function (req, res, next) {
	console.log("request reached", req.body)
	ContactData.findOne({ email: req.body.gemail }, function (err, data) {

		// console.log(avilableCertificatesData)
		//console.log(avilableCertificatesData)
		if (data) {

			if (data.password == req.body.password && data.firstName == req.body.fname && data.adharNumber == req.body.id) {
				let Coin = new Blockchain();
				Coin.addBlock(new Block("", data.firstName, data.adharNumber))
				console.log(JSON.stringify(Coin))
				blockChainSchema.findOne({ firstName: req.body.fname }, function (err, d) {
					console.log(d)
					let FOO = 5;
					if (d) {
						res.render("select", { name: data })
						app.get('/certificate', function (req, res) {
							res.render("certificate", { name: data,z:d });
						});

					}
				})

				// res.render("select", { name: data })
				// app.get('/certificate', function (req, res) {
				// 	res.render("certificate", { name: data });
				// });

				// console.log(JSON.stringify(Coin, null, 4))



			} else {
				res.render("loginerror");
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}

	});
});

module.exports = {
    FOO: FOO
};


app.get('/login', function (req, res) {
	res.render('login');
});









// app.get('/hash', function (req, res) {
// 	res.render('hash');
// });


// app.get('/Verified', function (req, res) {
// 	res.render('Verified');
// });




// app.post('/hash', function (req, res) {
// 	// res.render('hash');
// 	// console.log("request========",req.body)
// 	// blockChainSchema.findOne({firstName:req.body.fname},function(err,data){
// 	// 	if(data){
// 	// 		console.log(data)
// 	// 		app.post('/verified', function (req, res) {
// 	// 			res.render('Verified');
// 	// 		});
// 	// 	}
// 	// })
// 	app.post('/verified', function (req, res) {
// 		res.render('Verified');
// 	});

// });



app.use(bodyParser.json());
// app.post('/hash', function (req, res, next) {

// 	console.log("request reached",req.body)

// 	});


app.post('/hash', (req, res) => {
	res.render('hash');
	app.post('/Verified', function (req, res) {
		console.log("request========", req.body)
		blockChainSchema.findOne({ firstName: req.body.fname }, function (err, d) {
			console.log(d)
			if (d) {
				if (d.firstName == req.body.fname && d.currentHash == req.body.currentHash && d.adharNumber == req.body.adharNumber) {
					res.render('Verified', { name: d });
				}
			}
		})

	});
});



app.get('/downloadcomplete', function (req, res, next) {
	res.render("downloadcomplete")
})


app.listen(port, () => {
	console.log(path.join(__dirname, "../mernbackend/public"));
})