//switch case statement

"use strict";

 
let browser = 2; //browser detection would go in place of 2, tried various ways but no set way of finding out which browser a user is using?

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


