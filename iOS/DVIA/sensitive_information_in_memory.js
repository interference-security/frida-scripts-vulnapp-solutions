var instance = ObjC.chooseSync(ObjC.classes.SensitiveInformationDetailsVC)[0]
var instance_vars = instance.$ivars
console.log("[*] Username: " + (instance_vars._username).toString())
console.log("[*] Password: " + (instance_vars._password).toString())
//var instance = ObjC.chooseSync(ObjC.classes.SensitiveInformationDetailsVC)[0] 
//instance["- initializeLogin"]()
//var instance_vars = instance.$ivars
//console.log("[*] Passwd: " + (instance_vars._passwd).toString()) //This fails. To be updated.
