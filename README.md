## angular - meteor - example

### Setup

1) clone the repositry

    git clone git@github.com:tom-muhm/angular-meteor-example.git
    
2) start the application - so meteroite can download the plugins:

    mrt

3) fix the error: __*Object #<Object> has no method 'require'*__ by replacing the first three lines in __*'.meteor/meteorite/packages/angularjs/server.js'*__ with:

    var connect = Npm.require("connect");
    var fs = Npm.require("fs");
    var path = Npm.require("path");
    var Fiber = Npm.require("fibers");

(Note: this error only occurs for the angulurjs plugin v2.0.0 with meteor 0.6+)

### Run

1) Start your app with: 

    mrt

2) open the browser console and add new items with:

    angular.element('[ng-controller=MeteorCtrl]').scope().Todos.insert({name: 'Task x'})

3) see the magic happen


### DIY

1) install meteorite: https://atmosphere.meteor.com/wtf/app

2) create a new app: 

    mrt create angular-meteor-example && cd angular-meteor-example 

3) install the anguluarjs plugin: 

    mrt add angularjs

4) delete the default html and js files

5) copy the files from my repository 'angular-meteor-example.js' and 'public/angular.html' into your project

6) fix the error: __*"Object #<Object> has no method 'require'"*__ by following step 2. from the setup above
