/**
* Created by ctw on 03/11/14.
*/

// TodoList.js
define(function(){
    // private vars and functions


    this.Persona = function (name, sexo) {
        this.name = name || "Default name";
        this.sexo = sexo || "1";
        console.log("constructor: hace algo");
    }

    this.casado = function(womenName){
        "use strict";
        this.name = womenName || "Maria";

        console.log("casado con: "+ this.name);
        return "nada";
    }

    var private_var = "Content of the private var";






    return {
        Persona:Persona,
        casado:casado
    };

    // Return the object with all the public functions
    //return {
    //    one_variable: "String",
    //    two_variable: {
    //        'object': "value of the object"
    //    },
    //
    //    add: function(a, b){
    //            return a + b;
    //    },
    //    privateVars: function(){
    //        "use strict";
    //        console.log("Private var: ", private_var);  //"Content of the private var"
    //        constructor();      //"constructor: hace algo"
    //    }
    //}
});