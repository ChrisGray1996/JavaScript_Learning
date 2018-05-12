"use strict";

//variables can be declared using let or var keywords.

let variableDeclaration = 2;

var variableDeclarationUsingVar = 1; //var rarely used

const PI = 3.14159265359; //const keyword used for constants rather than let or var

alert("I am " + variableDeclaration + " years old");
    
alert(`I am ${variableDeclaration} years old`);

let booleanConversionVar = Boolean(variableDeclaration);

alert(booleanConversionVar);

alert(6 / "3"); //conversion occurs automatically because of / operator

alert(" -9\n" - 5);