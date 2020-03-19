# OWASP MSTG UnCrackable Level-2 Solution
This is for solving the challenge on 64-bit devices

Get the source code for UnCrackable Level 2 iOS: https://github.com/commjoen/uncrackable_app/tree/ioslvl2update/iOS/Level2

## Create IPA using Xcode without paid Apple Developer Account:
Source: https://www.youtube.com/watch?v=ME4_RHCaCAk
1. Open project in Xcode
2. Select the project in left-pane
3. Under General > Bundle Identifier change the identifier to something new
4. Inside ```UnCrackable/ViewController.m``` file comment the line ```xyz(signature);```. This does not work with 64-bit devices. For now this is a hack to make the app work.
4. Try to compile and fix if there are any errors
5. Go to Project > Archive
6. Under Archives tab, right-click on the selected line and choose "Show in Finder"
7. Right-click on file and choose "Show Package Contents"
8. Navigate to Products > Applications
9. Copy the file "UnCrackable Level 2" to a new folder named "Payload"
10. Right-click on "Payload" folder and choose "Compress"
11. Rename the file extension from ZIP to IPA
12. The file IPA is ready for installation using tools such as ios-deploy
