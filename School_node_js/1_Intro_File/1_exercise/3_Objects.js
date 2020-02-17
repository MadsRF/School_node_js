// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

// dot notation
console.log(myObj.message)

//bracket notation or square notation 
console.log(myObj["message"])


// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

var person = {"name": "mads", "age": 28}

console.log(person.name, person.age)

// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true 
console.log(stackOverflow)


// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description

thisSong = {"about": "Just a tribute"}
console.log(thisSong.about)

// --------------------------------------

// array can take any type of data
var fruits = [1, "banananan", {}]
console.log(fruits)


