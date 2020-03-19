//frida-trace -U -m "-[NSFileManager fileExistsAtPath:*]" Gadget
//-[NSFileManager fileExistsAtPath:0x1014d10d8]
try
{
	//Your class name here
	var className1 = "NSFileManager";
	//Your function name here
	var funcName1 = "- fileExistsAtPath:";
	var hook1 = eval('ObjC.classes.' + className1 + '["' + funcName1 + '"]');
	Interceptor.attach(hook1.implementation, {
	  onEnter: function(args) {
		// args[0] is self
		// args[1] is selector (SEL "sendMessageWithText:")
		// args[2] holds the first function argument, an NSString
		console.log("\n[*] Detected call to: " + className1 + " -> " + funcName1);
		//For viewing and manipulating arguments
		//console.log("\t[-] Value1: "+ObjC.Object(args[2]));
		console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
		//console.log(args[2]);
	  },
	  onLeave: function(retval) {
		console.log("\n[*] Class Name: " + className1);
		console.log("[*] Method Name: " + funcName1);
		//console.log("\t[-] Type of return value: " + typeof retval);
		//console.log(retval.toString());
		console.log("\t[-] Return Value: " + retval);
		//For modifying the return value
		var newretval = ptr("0x0") //your new return value here
		retval.replace(newretval)
		console.log("\t[-] New Return Value: " + newretval)
	  }
	});
}
catch(err)
{
	console.log("[!] Exception2: " + err.message);
}

//frida-trace -U -m "-[NSString writeToFile:*]" Gadget
//-[NSString writeToFile:0x1014d5e98 atomically:0x1 encoding:0x4 error:0x16eee1988]
try
{
	//Your class name here
	var className2 = "NSString";
	//Your function name here
	var funcName2 = "- writeToFile:atomically:encoding:error:";
	var hook2 = eval('ObjC.classes.' + className2 + '["' + funcName2 + '"]');
	Interceptor.attach(hook2.implementation, {
	  onEnter: function(args) {
		// args[0] is self
		// args[1] is selector (SEL "sendMessageWithText:")
		// args[2] holds the first function argument, an NSString
		console.log("\n[*] Detected call to: " + className2 + " -> " + funcName2);
		//For viewing and manipulating arguments
		//console.log("\t[-] Value1: "+ObjC.Object(args[2]));
		console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
		//console.log(args[2]);
	  },
	  onLeave: function(retval) {
		console.log("\n[*] Class Name: " + className2);
		console.log("[*] Method Name: " + funcName2);
		//console.log("\t[-] Type of return value: " + typeof retval);
		//console.log(retval.toString());
		console.log("\t[-] Return Value: " + retval);
		//For modifying the return value
		var newretval = ptr("0x0") //your new return value here
		retval.replace(newretval)
		console.log("\t[-] New Return Value: " + newretval)
	  }
	});
}
catch(err)
{
	console.log("[!] Exception2: " + err.message);
}

//frida-trace -U -m "-[NSFileManager removeItemAtPath:*]" Gadget
//-[NSFileManager removeItemAtPath:0x1014d5e98 error:0x0]
try
{
	//Your class name here
	var className3 = "NSFileManager";
	//Your function name here
	var funcName3 = "- removeItemAtPath:error:";
	var hook3 = eval('ObjC.classes.' + className3 + '["' + funcName3 + '"]');
	Interceptor.attach(hook3.implementation, {
	  onEnter: function(args) {
		// args[0] is self
		// args[1] is selector (SEL "sendMessageWithText:")
		// args[2] holds the first function argument, an NSString
		console.log("\n[*] Detected call to: " + className3 + " -> " + funcName3);
		//For viewing and manipulating arguments
		//console.log("\t[-] Value1: "+ObjC.Object(args[2]));
		console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
		//console.log(args[2]);
	  },
	  onLeave: function(retval) {
		console.log("\n[*] Class Name: " + className3);
		console.log("[*] Method Name: " + funcName3);
		//console.log("\t[-] Type of return value: " + typeof retval);
		//console.log(retval.toString());
		console.log("\t[-] Return Value: " + retval);
		//For modifying the return value
		var newretval = ptr("0x0") //your new return value here
		retval.replace(newretval)
		console.log("\t[-] New Return Value: " + newretval)
	  }
	});
}
catch(err)
{
	console.log("[!] Exception2: " + err.message);
}

//frida-trace -U -m "+[NSURL URLWithString:*]" Gadget
//+[NSURL URLWithString:0x1014d5eb8]
//| +[NSURL URLWithString:0x1014d5eb8 relativeToURL:0x0]
try
{
	//Your class name here
	var className4 = "NSURL";
	//Your function name here
	var funcName4 = "+ URLWithString:";
	var hook4 = eval('ObjC.classes.' + className4 + '["' + funcName4 + '"]');
	Interceptor.attach(hook4.implementation, {
	  onEnter: function(args) {
		// args[0] is self
		// args[1] is selector (SEL "sendMessageWithText:")
		// args[2] holds the first function argument, an NSString
		console.log("\n[*] Detected call to: " + className4 + " -> " + funcName4);
		//For viewing and manipulating arguments
		//console.log("\t[-] Value1: "+ObjC.Object(args[2]));
		console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
		//console.log(args[2]);
	  },
	  onLeave: function(retval) {
		console.log("\n[*] Class Name: " + className4);
		console.log("[*] Method Name: " + funcName4);
		//console.log("\t[-] Type of return value: " + typeof retval);
		//console.log(retval.toString());
		console.log("\t[-] Return Value: " + retval);
		//For modifying the return value
		var newretval = ptr("0x0") //your new return value here
		retval.replace(newretval)
		console.log("\t[-] New Return Value: " + newretval)
	  }
	});
}
catch(err)
{
	console.log("[!] Exception2: " + err.message);
}
try
{
	//Your class name here
	var className5 = "NSURL";
	//Your function name here
	var funcName5 = "+ URLWithString:relativeToURL:";
	var hook5 = eval('ObjC.classes.' + className5 + '["' + funcName5 + '"]');
	Interceptor.attach(hook5.implementation, {
	  onEnter: function(args) {
		// args[0] is self
		// args[1] is selector (SEL "sendMessageWithText:")
		// args[2] holds the first function argument, an NSString
		console.log("\n[*] Detected call to: " + className5 + " -> " + funcName5);
		//For viewing and manipulating arguments
		//console.log("\t[-] Value1: "+ObjC.Object(args[2]));
		console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
		//console.log(args[2]);
	  },
	  onLeave: function(retval) {
		console.log("\n[*] Class Name: " + className5);
		console.log("[*] Method Name: " + funcName5);
		//console.log("\t[-] Type of return value: " + typeof retval);
		//console.log(retval.toString());
		console.log("\t[-] Return Value: " + retval);
		//For modifying the return value
		var newretval = ptr("0x0") //your new return value here
		retval.replace(newretval)
		console.log("\t[-] New Return Value: " + newretval)
	  }
	});
}
catch(err)
{
	console.log("[!] Exception2: " + err.message);
}
