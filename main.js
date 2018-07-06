var appsensornodejs = require("../appsensor-nodejs");
//var appsensornodejs = require("appsensor-nodejs");
var points =  appsensornodejs.DetectionPoints



console.log(appsensornodejs.HelloWorld("Josh"));

console.log(appsensornodejs.AppSensorURL());

for (i=1; i<=9; i++)
{
    for (j=1; j<=10; j++)
    {
        //appsensornodejs.SendEvent("fred","Input Validation", `IE0${i}`);
        appsensornodejs.SendEventByDP("fred", points.IE1)
    }
}


//process.exit()