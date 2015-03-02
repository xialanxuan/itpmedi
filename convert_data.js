var fs = require('fs');

var infile = "data.txt";

if (process.argv.length > 2) {
    infile = process.argv[2];
}

var entries = fs.readFileSync(infile, 'utf8', function(err) {
    if (err) throw err;
}).split('\n');

var results = [];
var records = {male: {}, female:{}};

entries.forEach(function(entry) {

	var fields = entry.split(' ').filter(function(s) {
		return s.length !== 0;
	});


	var gender = (fields[1] === "1" ? "male" :"female");


	if (!records[gender][fields[0]]) {
		records[gender][fields[0]] = {min: fields[2], max:fields[2]};
	} else{
		if (fields[2] < records[gender][fields[0]].min) {
			records[gender][fields[0]].min = fields[2];
		} else if (fields[2] > records[gender][fields[0]].max) {
			records[gender][fields[0]].max = fields[2];
		}
	}

	results.push({
		temperature: parseFloat(fields[0]),
		gender: gender,
		rate: parseInt(fields[2])
	});

});



console.log(JSON.stringify(records));