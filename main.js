var appsensornodejs = require('../appsensor-nodejs');
//var appsensornodejs = require('appsensor-nodejs');
var points =  appsensornodejs.DetectionPoints



console.log(appsensornodejs.HelloWorld("Josh"));

console.log(appsensornodejs.AppSensorURL());

for (i=1; i<=9; i++)
{
    console.log(appsensornodejs.SendEvent("fred", points.IE1));
}

for (j=1; j<=10; j++)
{
    console.log(appsensornodejs.SendEvent("bob", points.AE4));
}


//process.exit()