//Your class name here
var className = "AESCrypt";
//Your function name here
var funcName = "+ decrypt:password:";
var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
Interceptor.attach(hook.implementation, {
  onEnter: function(args) {
	// args[0] is self
	// args[1] is selector (SEL "sendMessageWithText:")
	// args[2] holds the first function argument, an NSString
	console.log("[*] Detected call to: " + className + " -> " + funcName);
	//For viewing and manipulating arguments
	console.log("\t[-] Value args1 raw: "+args[2]);
	console.log("\t[-] Value args1 obj: "+ObjC.Object(args[2]));
	console.log("\t[-] Value args1 str: "+(ObjC.Object(args[2])).toString());
	console.log("\t[-] Value args1 raw: "+args[3]);
	console.log("\t[-] Value args2 obj: "+ObjC.Object(args[3]));
	console.log("\t[-] Value args2 str: "+(ObjC.Object(args[3])).toString());
	var NSString = ObjC.classes.NSString;
	var new_args3_val = NSString.stringWithString_('cb17927cc23e2757aadb8d8dc7594c32');
	args[3] = new_args3_val;
	console.log("\t[-] Value args1 raw (new): "+args[3]);
	console.log("\t[-] Value args2 obj (new): "+ObjC.Object(args[3]));
	console.log("\t[-] Value args2 str (new): "+(ObjC.Object(args[3])).toString());
  },
  onLeave: function(retval) {
        console.log("[*] Detected return from: " + className + " -> " + funcName);
        console.log("\t[-] Type of return value: " + typeof retval);
        console.log("\t[-] Value retval raw: "+retval);
		console.log("\t[-] Value retval obj: "+ObjC.Object(retval));
		console.log("\t[-] Value retval str: "+(ObjC.Object(retval)).toString());
        //For modifying the return value
        //var newretval = ptr("0x0") //your new return value here
        //retval.replace(newretval)
        //console.log("\t[-] New Return Value: " + newretval)
      }
});
