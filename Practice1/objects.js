//creating a "user" object and looping over it's properties and property values

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

//


//creating two objects to show that interger properties are ordered in ascending order and non-integer are ordered in creation order.

let codes = 
{
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
  
for(let code in codes) 
{
    alert(code); // 1, 41, 44, 49
}


let codesAgain = 
{
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for(let code in codesAgain) 
{
  alert( +code ); // 49, 41, 44, 1
}

//


//normal primatives or primative variables will assign/copy "as a whole value".

let message = "Hello!";
let phrase = message; //altering "phrase" now will not alter "message"

//object variables are not the same, they store a reference to the object

let user2 = 
{
    name: "John" 
};

let admin = user2; // copys the reference to the object, changing admin.name now would also change user.name


//

//assign can be used to copy the properties of several objects into one other object.

let user3 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

//

//Symbols: (not sure why these would ever be used?

//Object property keys can be of either type string, or symbol. Symbol values represent unique identifiers. They allow us to create hidden properties of an object. If another
//script declared " let id = Symbol("id"); " there would be no conflict as the symbol properties are hidden from one another. Symbols are skipped by for...in loops but still
//copied when using Object.assign to create a clone object.
let id = Symbol("id");

let usersss = {
    name: "John",
    [id]: 5 //Symbols in a literal object declaration need square brackets
};



usersss.id = 10;
alert("poggers");
alert(usersss.id);

//

// "this" keyword, is used to access the object. 

let user5 = {
    name: "John",
    age: 30,
  
    sayHi()
    {
        alert("poggers 2");
      alert(this.name);
    }
  
  };
  
  user5.sayHi(); // John
