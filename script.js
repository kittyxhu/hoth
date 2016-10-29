var Yelp = require('yelp');

var yelp = new Yelp({
	consumer_key: fmO_UOsI15WIVfjr40yrkw,
	consumer_secret: BTC23g-ZeHhCqS30-OLYPIabuL4,
	token: 5RS9friuyIAXLdvv_uZS70XRndvvMCeb,
	token_secret: gsAqtwYbsvkcSoSf2pb63mRCZQQ,
});

yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
	  console.log(data);
})
.catch(function (err) {
	  console.error(err);
});
