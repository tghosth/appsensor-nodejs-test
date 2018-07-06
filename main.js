var appsensornodejs = require("../appsensor-nodejs");

console.log(appsensornodejs.HelloWorld("Josh"));

console.log(appsensornodejs.AppSensorURL());

for (i=1; i<=100; i++)
{
    appsensornodejs.SendEvent("fred","Input Validation", `IE0${i}`);
}


//process.exit()