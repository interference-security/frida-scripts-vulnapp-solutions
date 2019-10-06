if (ObjC.available)
{
    //frida-trace -U -m "-[NSFileManager fileExistsAtPath:*]" Gadget
    //-[NSFileManager fileExistsAtPath:0x1014d10d8]
    try
    {
        //Your class name here
        var className = "NSFileManager";
        //Your function name here
        var funcName = "- fileExistsAtPath:";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("\n[*] Detected call to: " + className + " -> " + funcName);
            //For viewing and manipulating arguments
            //console.log("\t[-] Value1: "+ObjC.Object(args[2]));
            console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
            //console.log(args[2]);
          },
          onLeave: function(retval) {
            console.log("\n[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            //console.log("\t[-] Type of return value: " + typeof retval);
            //console.log(retval.toString());
            console.log("\t[-] Return Value: " + retval);
            //For modifying the return value
            newretval = ptr("0x0") //your new return value here
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
        var className = "NSString";
        //Your function name here
        var funcName = "- writeToFile:atomically:encoding:error:";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("\n[*] Detected call to: " + className + " -> " + funcName);
            //For viewing and manipulating arguments
            //console.log("\t[-] Value1: "+ObjC.Object(args[2]));
            console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
            //console.log(args[2]);
          },
          onLeave: function(retval) {
            console.log("\n[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            //console.log("\t[-] Type of return value: " + typeof retval);
            //console.log(retval.toString());
            console.log("\t[-] Return Value: " + retval);
            //For modifying the return value
            newretval = ptr("0x0") //your new return value here
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
        var className = "NSFileManager";
        //Your function name here
        var funcName = "- removeItemAtPath:error:";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("\n[*] Detected call to: " + className + " -> " + funcName);
            //For viewing and manipulating arguments
            //console.log("\t[-] Value1: "+ObjC.Object(args[2]));
            console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
            //console.log(args[2]);
          },
          onLeave: function(retval) {
            console.log("\n[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            //console.log("\t[-] Type of return value: " + typeof retval);
            //console.log(retval.toString());
            console.log("\t[-] Return Value: " + retval);
            //For modifying the return value
            newretval = ptr("0x0") //your new return value here
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
        var className = "NSURL";
        //Your function name here
        var funcName = "+ URLWithString:";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("\n[*] Detected call to: " + className + " -> " + funcName);
            //For viewing and manipulating arguments
            //console.log("\t[-] Value1: "+ObjC.Object(args[2]));
            console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
            //console.log(args[2]);
          },
          onLeave: function(retval) {
            console.log("\n[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            //console.log("\t[-] Type of return value: " + typeof retval);
            //console.log(retval.toString());
            console.log("\t[-] Return Value: " + retval);
            //For modifying the return value
            newretval = ptr("0x0") //your new return value here
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
        var className = "NSURL";
        //Your function name here
        var funcName = "+ URLWithString:relativeToURL:";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("\n[*] Detected call to: " + className + " -> " + funcName);
            //For viewing and manipulating arguments
            //console.log("\t[-] Value1: "+ObjC.Object(args[2]));
            console.log("\t[-] Value2: "+(ObjC.Object(args[2])).toString());
            //console.log(args[2]);
          },
          onLeave: function(retval) {
            console.log("\n[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            //console.log("\t[-] Type of return value: " + typeof retval);
            //console.log(retval.toString());
            console.log("\t[-] Return Value: " + retval);
            //For modifying the return value
            newretval = ptr("0x0") //your new return value here
            retval.replace(newretval)
            console.log("\t[-] New Return Value: " + newretval)
          }
        });
    }
    catch(err)
    {
        console.log("[!] Exception2: " + err.message);
    }
}
else
{
    console.log("Objective-C Runtime is not available!");
}
