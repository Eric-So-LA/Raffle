var fs = require('fs');
var util = require('util');

var Cant = {
	"name": "Canada",
	"label": "Province",
	"postal_label": "Postal Code",
	"locale": "en_CA",
	"currencySymbol": "$",
	"options": {
		"AB": "Alberta",
		"BC": "British Columbia",
		"MB": "Manitoba",
		"NB": "New Brunswick",
		"NL": "Newfoundland &amp; Labrador",
		"NT": "Northwest Territories",
		"NS": "Nova Scotia",
		"NU": "Nunavut",
		"ON": "Ontario",
		"PE": "Prince Edward Island",
		"QC": "Quebec",
		"SK": "Saskatchewan",
		"YT": "Yukon Territory"
	}
}
var Can = JSON.parse(JSON.stringify(Cant));

var states = Can.options;
var final = [];
for(state in states){
	var name = states[state];
	var pushable = {
      type: 'FieldOption',
      props: {
        display: name,
        value: state,
      },
    };
	final.push(pushable)
}
console.log(final);
fs.writeFile('./output.json', util.inspect(final), 'utf-8', function(err){
	if(err){
		console.log(err);
	}
	console.log("file saved");
})
