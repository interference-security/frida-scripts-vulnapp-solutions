//Your class name here
var className = "JailbreakDetectionVC";
//Your function name here
var funcName = "- isJailbroken";
var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
Interceptor.attach(hook.implementation, {
  onLeave: function(retval) {
    console.log("\n[*] Class Name: " + className);
    console.log("[*] Method Name: " + funcName);
    //console.log("\t[-] Type of return value: " + typeof retval);
    //console.log(retval.toString());
    console.log("\t[-] Return Value: " + retval);
    //For modifying the return value
    var newretval = ptr("0x0") //your new return value here
    retval.replace(newretval)
    console.log("\t[-] New Return Value: " + newretval)
  }
});
