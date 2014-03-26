// used in lesson2.html

//Objects

var message = "It's cold today"
console.log(message.length);
console.log(message.toUpperCase());

// Loops

// The 'for' loop

//for(initial value; condition; increment) {
//  set of statements
//}

var total = 0;
for(var i = 1; i <= 10; i++) { // <= stands for smaller or equal. We can also express <=1 0 using < 11
  total = total + i;           // i++ increments the value of i at the end of the loop.
}
console.log("Total: " + total);




// Fibonnaci example with 'for' loops

for ( var i = 2, fs = [ 0, 1 ];
    i < 12; i++ ) {
    fs[i] = fs[ i - 1 ] + fs[ i - 2 ];
}

console.log( fs );


// The 'while' loop

var x = 1;
var total = 0;
while(x <= 10) {
  total = total + x++;
}
console.log("Total: " + total);

// Coach Q: I don't quite understand what the loop does..?

// Arrays

var animals = ["dog", "cat", "rabbit", "horse", "elephant", "monkey"]
console.log(animals[0]);

// Properties - length

animals.length // returns the size of the Array
console.log(animals.length); //length of animals array i.e. 6
console.log(animals[3].length);//length of horse

// Methods - Adding objects

animals.push("zebra") //adds an element to the end of an array

animals.unshift("cow") // adds an element to the beginning of the array

// Methods - removing objects

array.pop()

// Ordering

animals.sort()

[ 3, 6, 4, 1, 7, 4 ].sort()

animals.sort().reverse();

// Loops again!

var fruitAndVeg = [ "apple", "orange", "banana", "kiwi", "avocado", "celery", "aubergine" ];
var fruits = true;
var x = 0;

while (fruits) {
  console.log(fruitAndVeg[x++]);
  if (fruitAndVeg[x] == "avocado") {
    fruits = false;
    console.log("No more fruits!");
  }
}



