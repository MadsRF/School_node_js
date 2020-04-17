// this is how you use regex. Remember it is case sensitive unless you use i for ignore.
const myRegEx = /hello/i;
// test the regex
const result = myRegEx.test("Hello World");
// console.log(result);


//pipe | = or used to test for diffrent words at once
const petString = "Anders has birds and a turtle";
const petRegEx = /dog|cat|bird|fish|turtle|/
// console.log(petRegEx.test(petString));


// Match
const extractString = "Extract the word 'cow' from this string";
const cowRegex = /cow/;
//console.log(extractString.match(cowRegex));


// exercise: extract the word string from above
const wordRegex = /string/
//console.log(extractString.match(wordRegex));


// uses g for global to get more than the first hit.
//console.log("Repeat, Repeat, repeat".match(/Repeat/ig));


//Exercise: find the twinkle
const twinkleStar = "Twinkle, twinkle, little star";
const twinkleRegEx = /twinkle/ig;
// console.log(twinkleStar.match(twinkleRegEx));


// Wildcards
const humString = "That's humbug!";
const hugString = "I need a hug";
// the dot takes the letters from words that starts with hu. without the dot it takes the whole word.
const huRegEx = /hu./;
//console.log(humString.match(huRegEx));
//console.log(hugString.match(huRegEx));


// Exercise:
//console.log("He's a fun 'un".match(/.un/ig));


// Wildcards II - one of the following letters
//console.log("i found big bugs in my bag".match(/b[aui]g/g));


// Exercise: find all the vowels in the string above 
//console.log("i found big bugs in my bag".match(/[aeyiou]/g));


// Negated characters sets
// Excludes the words containing ai with the ^ key
//console.log("i found big bugs in my bag".match(/b[^ai]g/g));


// Range
//Finds all the numbers from 0-9
//console.log("563246jfwoifjwegfo".match(/[0-9]/g));


// Exercise: Match the entire alphabet (from a-z or a-å)
//console.log("563246jfwoifjæøåwegfo".match(/[a-å]/ig));


// Alphanumeric (number and letters) (can also do it with a space inbetween for easier readability)
//console.log("563246jfwoifjæøåwegfo".match(/[a-z0-9]/ig));


// Multiple Matches (uses the astrix to get all match containing the search word. can also use + but that does not return if the list is empty)
console.log("go goo Gooo gooooooo".match(/go*/ig));


