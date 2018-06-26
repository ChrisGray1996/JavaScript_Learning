//Useful array methods i didn't know about, obviously a lot more exist such as arr.forEach

//

//the arr.map method can be used to call a function for each element of an array and return the array of results from that function.

//example of map being used to transform each element of an array into their respective lengths

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
alert(lengths); // 5,7,6


//arr.sort can be used to sort an array in place. Note that the elements will be converted to strings before comparison. A function must be supplied as an argument to arr.sort()
//to use a custom sorting order.

function compareNumeric(a, b) 
{
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
  
let arr = [ 1, 15, 2, 4, 0 ];
  
arr.sort(compareNumeric);
  
alert(arr);  // 0, 1, 2, 4, 15

//arr.reduce can be used to use all of the elements of an array with some function but only return one value. 

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

//arr.isArray determines if something is an array or not. Useful for distinguishing between arrays and plain objects

alert(Array.isArray({})); // false

alert(Array.isArray([])); // true



//thisArg parameters are additional optional parameters that can be used on many array methods. It is used to provide the "this" for a function.

let user = {
    age: 18,
    younger(otherUser) 
    {
      return otherUser.age < this.age;
    }
  };
  
  let users = [
    {age: 12},
    {age: 16},
    {age: 32}
  ];
  
  // find all users younger than user
  let youngerUsers = users.filter(user.younger, user); //user is the extra "thisArg" parameter that is supplied, so that the younger method in the user object has a argument to
                                                       //use
                                                       
  alert(youngerUsers.length); // 2