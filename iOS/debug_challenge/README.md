# debug_challenge solutions
Challenge: https://github.com/rustymagnet3000/debugger_challenge

## Inject FridaGadget in IPA
```objection patchipa --source debug_challenge_rebuild.ipa --codesign-signature XXXXXXXXX```

## Install the app using ios-deploy
```unzip debug_challenge_rebuild-frida-codesigned.ipa```

With debugger attached: ```ios-deploy -W -d -b Payload/debugger_challenge.app```

Without debugger attached: ```ios-deploy -b debug_challenge_rebuild.ipa```

## Run the application in Frida
With debugger attached: ```frida -U -n Gadget```

Without debugger attached:
In terminal run ```frida -U -f funky-chicken.debugger-challenge-rebuild``` then execute ```%resume``` in Frida prompt.

In another terminal ```frida -U -n Gadget``` to start the application.

## sysctl debugger check
While debugger is attached to debug_challenge app, we have to replace the ```_sysctl``` call which is defined inside ```libsystem_kernel.dylib``` using the below Frida script.
```
//null can be replaced with libsystem_kernel.dylib which exports sysctl
var sysctlPtr = Module.findExportByName(null, "__sysctl");
Interceptor.replace(sysctlPtr, new NativeCallback(function () {
	console.log("[*] Sysctl called and replaced")
}, "int", []));
```

## exception port debugger check
Documentation: https://developer.apple.com/documentation/kernel/1537860-task_get_exception_ports?language=objc
```
Interceptor.attach(Module.findExportByName("libsystem_kernel.dylib", "task_get_exception_ports"), {
	onEnter: function(args) {
		console.log("[*] task_get_exception_ports was called")
		console.log(args[1])
		args[1] = ptr("0x0")
		console.log(args[1])
	}
});
```

## start ptrace deny debugger
While debugger is attached to debug_challenge app, we have to replace the ```ptrace``` call which is defined inside ```libsystem_kernel.dylib``` using the below Frida script.
```
//null can be replaced with libsystem_kernel.dylib which exports ptrace
var ptracePtr = Module.findExportByName(null, "ptrace");
Interceptor.replace(ptracePtr, new NativeCallback(function () {
	console.log("[*] Ptrace called and replaced")
}, "int", []));
```
