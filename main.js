var appsensornodejs = require('../appsensor-nodejs');
//var appsensornodejs = require('appsensor-nodejs');
var points =  appsensornodejs.DetectionPoints

var responseCallback = 

//console.log(appsensornodejs.HelloWorld("Josh"));

console.log(appsensornodejs.AppSensorURL());

for (i=1; i<=30; i++)
{
    setTimeout(function() {
        console.log(appsensornodejs.SendEvent("fred", points.IE1));
    }, i*1000);
}

for (j=1; j<=30; j++)
{
    setTimeout(function() {
        console.log(appsensornodejs.SendEvent("bob", points.AE4));
    }, j*1500);
}


setTimeout(function() {
    appsensornodejs.GetResponses(function(responseObj) 
    {
            console.log(`Response: ${JSON.stringify(responseObj)}`);
    });
}, 40000);


//process.exit()