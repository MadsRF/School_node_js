/*

// "hoisting" means you can call your function before defining it in the code since code doesn't matter
console.log(addition(2,6))

function addition(a, b) {
    return a+b
}

//console.log(addition(2,6))

// works but not good syntax
test = "this is a test"
// uses var to tell js that this is a variable. 
var test
console.log(test)


test2 = "this is a test2"
// constance. dosen't work 
const test
console.log(test2)

// a scope 
{
    console.log("1,2,3")
}

*/
/*
function intro() {
    console.log("nice to meet you")
}

function goodbye() {
    console.log("Goodbye")
}

function findPerson(whatToDoAfterFindingAPerson) {
    console.log("Spotted a person")
    whatToDoAfterFindingAPerson()
}

findPerson(intro)

findPerson(goodbye)
*/


const meObject = {"hobby": "tennis"}

// uses dot notation on objects ex. object.value
const aboutMe = function(me){
    console.log("My Hobby is", me.hobby)
}

aboutMe(meObject);


// Create an arrow function that is called callingLater
// that takes the function calling as an argument


const calling = function (name) {
    return "ring ring ring " + name
}

callingLater = (calling, name) => {
    console.log(calling(name))
}

callingLater(calling, "mads");


function lastThing() {
    function thisIsPossibleInJavaScript(){
        console.log("A OK")
    }
    thisIsPossibleInJavaScript()
}

lastThing()



