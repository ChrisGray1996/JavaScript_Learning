//switch case statement

"use strict";

//variables can be declared using let or var keywords.
 
let browser = 2; //browser detection would go in place of 2, tried various ways but no set way of finding out which browser a user is using?

var browserDeclaredUsingVar = 1; //var rarely used

const PI = 3.14159265359;

switch(browser)
{
    case 'Edge':
    alert("You are an edgelord");
    break;
    case 'Chrome':
    case 'Fireforx':
    case 'Opera':
    case 'Safari':
    alert('You are a normie');
    break;

    default:
    alert('What kind of a wizard are you?');
}

alert("I am " + browser + " years old");
    
alert(`I am ${browser} years old`);

let booleanConversionVar = Boolean(browser);

alert(booleanConversionVar);

