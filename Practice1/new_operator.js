//constructor functions and the new operator can be used to create objects. This is useful if many similar objects need to be created.

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

let user2 = new User("James");
user2.isAdmin = true;

alert(user2.name); // James
alert(user2.isAdmin); // true

// new.target can be used to check whether a function was called with new or without it. It is empty for regular calls and equals the function if called with new.

function User3()
{
    alert(new.target);
}

User3();

new User3();



//If a function uses the return keyword with an object, that object will be returned. Otherwise "this" will always be returned. It is not common for constructors to have a
// return statement

function Spooky()
{
    this.name = "Chris";

    return { name: "Ghost" };
}

alert( new Spooky().name );





//this can be added to methods as well as properties 

function User4(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User4("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */