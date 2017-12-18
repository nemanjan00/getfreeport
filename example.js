const getfreeport = require("./");

getfreeport().then(function(port){
	console.log(port);
});

