// This is where all the practise code from the Introduction to Javascript tutorial goes

console.log("Hello! This is my first line of Javascript!");

// Strings

var name = "Aslan ";

console.log(name + "is amazing!"); // this is an expression

// Numbers

var pi = 3.14;

console.log("The value of pi: " + pi);

var year = 2013;
var nextYear = year + 1;

console.log("We are in " + year +", but " + nextYear + " is just around the corner!");

// Booleans - true/false

var codebarIsAwesome = true;
var weatherIsAmazing = false;

console.log("Is Codebar AWESOME? " + codebarIsAwesome);
console.log("Is the weather in London amazing? " + weatherIsAmazing);

// Undefined variables

var iDontHaveAValue;

console.log("What kind of variable am I? " + iDontHaveAValue);

// Operations

console.log("Operations");

var x = 6;
var y = 3;
var addition = x + y;

console.log("Addition: x+y=" + addition);

var subtraction = x - y;

console.log("Subtraction: x-y=" + subtraction);

var multiplication = x * y;

console.log("Multiplication: x*y=" + multiplication);

var division = x / y;

console.log("Division: x/y=" + division);

// The if statement

if (codebarIsAwesome) {
  console.log("Codebar is AWESOME!");
}

var codebarIsAwesome = false;

if (!codebarIsAwesome) {
  console.log("Codebar is not so awesome :(!");
}

// Equality ==

var apples = "apples";
var oranges = "oranges";

if (apples == oranges) {
  console.log("Apples and Oranges are the same thing!");
}

// Inequality !=

if (apples != oranges) {
  console.log("Apples are not Oranges!");
}

// Greater than >

var coaches = 20;
var students = 26;
var pizzas = 25;

var people = coaches + students;

if (people > pizzas) {
  console.log("We have more people than pizzas!");
};

if (students > pizzas) {
  console.log("But we have more students than pizzas! Let's not give the coaches any food.");
};

// Less than <

if (coaches < students) {
  console.log("We have less coaches than students.");
}

// If Else statements

if (people > pizzas) {
  console.log("We have more people than pizzas. That's not very good :/");
} else {
  console.log("We have waaay too much pizza. That can never be bad! :)");
}

// Functions

function hello() {
 console.log("Hello!");
}

hello ("Harini"); // hello () - hello undefined

function hello(name) {
 console.log("Hello " + name + "!"); // function with arguments
};

// Call the function in the browser

function popupHello() {
  alert("Hello " + name); // add popupHello (); and for the browser to keep saying Hello Aslan
}

// Call the function in the console

function popupHello() {
  console.log("Hello " + name);
}

popupHello ();

// Multiple arguments

function whatIAmDoingToday(coach, place) {
 console.log("Today, I am at " + place + " and I am learning a bit of JavaScript with the help of " + coach);
}

whatIAmDoingToday("Maria", "MakersAcademy");

// question to coach: why doesn't it work if I define var coach = "Maria"; ?

// Returning values

 function addNumbers(x, y) {
 return x+y;
}

// not sure why the return function doesn't run as it should...

// Scope

var result = x-y;

function subtractNumbers(x,y) {
  return result;
}

subtractNumbers(10,3);
console.log(result);

// Bonus - My own Javascript Program!

var numberOfCodebarSessions = 15;

function aFewDetailsAboutMe(StudentName, StudentDetail1, StudentDetail2) {
  console.log("Hi! My name is " + StudentName + ". " + "A couple of things about me, I love " + StudentDetail1 + " and " + StudentDetail2 + ". " + "I have attended " + numberOfCodebarSessions + " sessions so far!");
}

aFewDetailsAboutMe("Harini", "cats", "coding")

if (numberOfCodebarSessions > 0) {
  console.log("This is not my first time here. I <3 Codebar!");
} else {
  console.log("This is the first time I'm attending Codebar!");
}

