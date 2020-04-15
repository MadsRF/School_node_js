
// hoisting
//console.log(addition(5, 23));


// test = "this is a test";
// let test;

// a scope
{
    //console.log("1 2 3 ")
}

function addition(a, b) {
    return a + b;
}

// var sum = addition(2, 6);

// console.log(sum);

function introduce() {
    console.log("Nice to meet you");
}


const clueless = function() {
    console.log("I don't know you.")
}

function findPerson(whatToDoAfterFindingAPerson) {
    console.log("Spotted a person!")
    whatToDoAfterFindingAPerson();
}

// findPerson(introduce);

// do something else..  not introduce
findPerson(clueless);

const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

const meAsAnObject = {
    hobby: "programming"
};


aboutMe(meAsAnObject);

const anotherExample = {
    myFavoriteFunction: () => {
        console.log("This function is my favorite in the world");
    }
}

anotherExample.myFavoriteFunction();

// create an arrow function that is called callingLater 
// that takes the function calling as an argument

const calling = (name) => {
    return "ring ring ring to " + name;
};

const callingLater = (name, calling) => {
    console.log(calling(name));
}

// callingLater("Scatman John", calling);

callingLater("Scatman John", (name) => {
    return "ring ring ring to " + name;
});

function lastThing() {
    function thisIsPossibleInJavascript() {
        console.log("A OK");
    }
    thisIsPossibleInJavascript();
}

lastThing();
