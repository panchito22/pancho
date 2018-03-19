'use.strict'
var Client = require('node-rest-client').Client
var client = new Client()

//variable echa funcion
var getRequest = function(url,callback){
	var client = new Client()
	var responseData ={}
	client.get(url, function(data,responseData){
		responseData=data
		callback(responseData)
	});
}

//funcion funcion

/*function getRequestExtern(req,res){
	getRequest(,function(response){
		res.send(response)
	})
}*/


module.expotrs={
	getRequest
}