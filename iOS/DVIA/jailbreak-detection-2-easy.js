if (ObjC.available)
{
    try
    {
        //Your class name here
        var className = "DamnVulnerableAppUtilities";
        //Your function name here
        var funcName = "+ showAlertForJailbreakTestIsJailbroken:";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onEnter: function(args) {
            // args[0] is self
            // args[1] is selector (SEL "sendMessageWithText:")
            // args[2] holds the first function argument, an NSString
            console.log("\n[*] Detected call to: " + className + " -> " + funcName);
            console.log("\t[-] Argument Value: "+args[2]);
            newargval = ptr("0x0") //your new argument value here
            args[2] = newargval
            console.log("\t[-] New Argument Value: " + args[2])
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
