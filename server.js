var express = require('express');
var app = express();

app.get('/', function(req, res) {

	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  	var arrIP = ip.split(",");
  	/*
  	console.log('req');
  	console.log(req);
  	console.log('headers');
  	console.log(req.headers);
	*/
  	
  	//Note: in this version I just console.log() and based 
  	//on the result, split off what's not needed;
  	//Could have also expreriment with user-agent-parser etc...
  	var language = req.headers["accept-language"];
  	var arrLan = language.split(",");
  	
  	var software = req.headers['user-agent'];
  	var temp1 = software.split("(");
  	var arrSoftw = temp1[1].split(")");

  	//console.log('arrSoftw: ' + arrSoftw);

	var output = {
		'ipaddress' : arrIP[0],
		'language' : arrLan[0],
		'software' : arrSoftw[0]
	};
    
    res.send(output);
});
  


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
