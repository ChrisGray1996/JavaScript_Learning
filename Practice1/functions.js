"use strict"

//simple function declaration
//////////////////

function sayHello(a, b, c)
{
    a = b;
    b = c;
    alert(a);
    return a;
}

let d = sayHello(3, 5, 6);
alert(d);

////////////////


//callback functions. showOk() is the callback function for yes, and showCancel is the callback function for no.
////////////////

function ask(question, yes, no) 
{
    if (confirm(question))
    { 
        yes()
    }
    else 
    {
        no();
    }
}
  
  function showOk() 
  {
    alert( "You agreed." );
  }
  
  function showCancel() 
  {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

////////////////



//using a "welcome" variable outside the if statements so that the function expressions still work. welcome can be thought of as a variable of type "function".
////////////////

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) 
{
  welcome = function() 
  {
    alert("Hello!");
  };

} else 
{
  welcome = function() {
    alert("Greetings!");
  };
}

welcome(); // ok now
alert(typeof(welcome));

////////////////

// Arrow functions
////////////////

let sum = (a, b) => a + b;
alert(sum(10, 20));

let sumAgain = (a, b) => 
{
    return a + b;
}

alert(sumAgain(20, 20));

////////////////