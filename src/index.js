const express = require('express')
const bodyParser = require('body-parser')
const path = require("path")
const hbs = require("hbs")

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
let grade;
let fname;
let mname;
let lname;
app.post('/logincheck', function (req, res, next) {
	//console.log("request reached",req)
	ContactData.findOne({ email: req.body.email }, function (err, data) {
		grade = JSON.stringify(data.grade);
		fname = JSON.stringify(data.firstName);
		mname = JSON.stringify(data.middleName);
		lname = JSON.stringify(data.lastName);
		// console.log(avilableCertificatesData)
		//console.log(avilableCertificatesData)
		if (data) {

			if (data.password == req.body.password && data.firstName == req.body.fname && data.adharNumber == req.body.id) {

				res.render("select", { name: data })
				app.get('/certificate', function (req, res) {
					res.render("certificate", { name: data });
				});
				let Coin = new Blockchain();
				Coin.addBlock(new Block("", data.firstName, data.adharNumber))
				// console.log(JSON.stringify(Coin, null, 4))



			} else {
				res.render("login");
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}

	});
});


app.get('/login', function (req, res) {
	res.render('login');
});

app.get('/hash', function (req, res) {
	res.render('hash');
});


app.get('/Verified', function (req, res) {
	res.render('Verified');
});



// app.get('/', (request, response) => {
//     response.render('login');
// });

app.listen(port, () => {
	console.log(path.join(__dirname, "../mernbackend/public"));
})