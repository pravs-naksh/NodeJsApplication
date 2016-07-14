var os = require('os');
 var message = "Please find the information below";

 var mySysArray = new Array('Type: '+os.type(),
 							'Node Version: '+process.version,
 							'Platform: '+os.platform(),
 							'Hostname: '+os.hostname(),
 							'Total memory: '+os.totalmem(),
 							'Free Memory: '+os.freemem(),
 							'Uptime: '+os.uptime()
 							);

console.log(message);

var arraylen = mySysArray.length;

i = 0;

while(i<arraylen)
{
	console.log(mySysArray[i]);
	i++;
}