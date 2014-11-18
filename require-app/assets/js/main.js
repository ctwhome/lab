// main.js
requirejs.config({
    "baseUrl": "assets/js",
    "paths": {
        "jquery": "../vendor/jquery-2.1.1.min"
    },
    // Shim: for global exports
    "shim": {
        "jquery" : {
            "exports" : "$"
        }
    }
});

// Main Applicacion. The first ejecution
// Load the main app module to start the app
require([
    'Models/User',
    'Router',
    'jquery'                      // Put at the end when has a shim
], function (User, Router ) {
    var users = [
        new User('Barney'),
        new User('Cartman'),
        new User('Sheldon')
    ];

    for (var i in users){
        console.log(users[i].name);
    }

    localStorage.users = JSON.stringify(users);

    Router.startRouting();

});