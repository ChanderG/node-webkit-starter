#Node-Webkit template(WIP)

###What?
A simple template to work with Node-Webkit. Includes Bootstrap, Bootswatch theme and Node-QUnit for testing.


###Build Instructions
* Run npm install.
* Add node-webkit script folder for platform manually.
* Run the script zip.sh to zip the right contents into myapp.nw .
* Run the nw script with the myapp.nw to get result. 

To test:
* Rename path in tests/testrunner.js to your own value.(I may be changing the test framework.I mean, what sort of system doesnot allow relative paths)
* Run

```
node tests/testrunner.js


