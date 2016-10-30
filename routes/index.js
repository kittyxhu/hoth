var express = require('express');
var router = express.Router();

var tester = "hello world"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: tester });
});
router.post('/result', function(req, res) {
	var Yelp = require('yelp');

	var yelp = new Yelp({
		consumer_key: 'fmO_UOsI15WIVfjr40yrkw',
		consumer_secret: 'BTC23g-ZeHhCqS30-OLYPIabuL4',
		token: '5RS9friuyIAXLdvv_uZS70XRndvvMCeb',
		token_secret: 'gsAqtwYbsvkcSoSf2pb63mRCZQQ',
	});

	var rand = Math.floor(Math.random() * 8);

	yelp.search({ term: "food", location: req.body.location , limit: 10 })
	.then(function (data) {
		console.log(data);
		res.render('index', { 
			output_name: "Name: " + data.businesses[rand].name, 
			output_rating: "Rating: " + data.businesses[rand].rating,
			output_phone: "Phone: " + data.businesses[rand].phone,
			output_price: "Price: " + data.businesses[rand].price
			//output_website: data.businesses.url
		});
	})
	.catch(function (err) {
		console.error(err);
	});
});

module.exports = router;
