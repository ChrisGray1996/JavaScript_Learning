"use strict";


//alert
let message = "This is an alert";

alert(message);




//prompt
let title = "";

let defaultMessage = "Enter Title Here";

let result = prompt(title, defaultMessage);

alert(`Their title is ${result}.`);



//confirm

let bossQuestion = "Are you the boss?";

let isBoss = confirm(bossQuestion);

alert(isBoss);