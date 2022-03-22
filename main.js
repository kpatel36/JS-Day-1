// single line comments in javascript are written with two slashes instead of a #

/* 
multi-line comments are written with
slash-star 
content
star-slash format
*/

/*
Hello World in JS- we'll be looking at javascript basics today and tomorrow 
we'll be familiarizing ourselves with the syntax and structure of the language
so that we can more easily learn and understand its unique properties later in the week

JS is a front end language - usually deals with what people see
normally run client side


JS is the wild west of programming languages
whereas python goes by the philosophy that there is only one solution to a problem
JS  philosophy is more like just find one to work it out 
*/

// console.log() is the JavaScript equivalent to Python's print


console.log('Hello, Foxes')
/*
no print button @ top of screen - can either be run on the html page 
thanks to the script tag implemented - with the defer statement added in to script tag
not on main page but rather in the rightclick inspect - console tab

other way is to use NODE
- NODE is a framework
- node lets you build like a back server of JavaScript
- it is built off of Google Chrome's JavaScript engine
- but it also just lets you use node from your terminal in VSCode
- install node - add to path
- use node : in command line use the command:" node jsfilename.js"


*/

/*
differences in overall structure between python and JS:
- python is an interpreted language while JS is a compiled language
    - interpreted language is first read by computer when code runs - all work done at runtime - done top down - what we see is what computer sees
    - compiled language read by compiler who first translate then the computer reads the translation
        - aka not all work done at Runtime, some work done @ compile stage
        - quicker because some informations already been run through 
    - indentation has no effect on code blocks 
    - sep out code blocks with semicolons - not necessarily needed, but they are helpful and good practice to had them when needed

*/

// Variable definition in JS is similar to python
// TELL computer what your're doing by BEFORE you do it
// var keyword tells computer we're defining a variable
// strings in JS are same as string in python 
    // strings are still immutable in JS

// python core data types and their equivalents in JS:
    // python strings == string JS
    // python boolean ==  boolean JS
    // python  int ==/!=  numeric JS
    // python float ==/!= numeric JS

var name1='sam';
console.log (name1)

var num1 =4;
console.log(num1);
var num2 = 3.1415;
console.log(num2);

// checking datatype - done with the 'typeof' keyword
console.log(typeof num1);
console.log(typeof num2);

// boolean values are similar - just not capitaliaed
// true and flase
var bool1 = true;
console.group(bool1, typeof bool1);


// two main primary structures in python are list and dictionary.
// their JS equivalents are arrays and objects
var js_arr = [num1, num2, bool1];
console.log(js_arr);

// object - just like a dictionary with key value pairs
var js_obj = {'a_key': 'a_value'};
console.log(js_obj);


/* core concept diff: variable definiition vs declaration
variable declaration is a sep process that falls under the umbrella of telling computer what you're about to do if you do it
    - there is no python equivalent of declaration
    - we cannot declare variable without defining it (giving it value/setting it equal to something)
    - JS we can separately declare a variable 
        - variable declared in JS will be defined at the same time with all of examples above
        - however we can leave a variable undefined in which its value is predictably undefined
*/

// declaration without definition
// var <name of variable>
var some_variable;
console.log(some_variable);

// definition without declaration is bad practice

//VARIABLE HOISTING
    // all variable declarations pulled to top of code while compiling
    // advantage : unlikely yo get a varaiable undeclared/undefined error
    // disadvanage:  never get a variable undefined errir... your variable will just have value undefined
    // see example.py for python comparison 

var hoisted_variable = 'Fennec Fox';
console.log(hoisted_variable);


// 1. Declare the variable 2. Define the Variable
// 3. Redeclaration? 4. Redefinition?
var hoisted_variable; // redeclaration - this variable has already been declared
hoisted_variable = 'Arctic Fox'; // redefinition without redeclaration
console.log(hoisted_variable);
// if you do this, you will run into weird behavior and/or things breaking for seemingly no reason
// i am improperly using variable declaration and definition
// proper use:
    // declare a variable only once
    // define it after you declare it (or at the same time)
    // redefine it without redeclaring it
// is there a way to make remembering those rules easier? Yes!
// ECMAScript - a standardization of how JavaScript SHOULD be written for best practices
// current iteration: ES6
    // additional rules and recommendations for how you write your JavaScript
    // including a better way to handle declaration and definition of variables
    // let and const keywords

// let vs const vs var
// as we see above - var allows declaration, definition, redeclaration, redefinition
// let replaces var
    // let allows for redefinition but not redeclaration
    // let forces you to follow best declaration and definition practices
let x = 5;
//let x = 7; // error -- cannot redeclare. redefition is the let x part, so will not be repeatin gthis
x = 'redefinition is allowed';

// const is a new thing - for constant variables
// doesnt allow for redeclaration  or redefinition
const c = 3.1415;
//c = 717; // error - redef pf a constant is not allowed

/*
basic math operations in JS
*/
console.log('\n\nMath:');
let sum1 = 1.5 + 3;
console.log(sum1);
let diff1 = 500-300;
console.log(diff1);
let product1 = 50*50;
console.log(product1);
let div1 = 21/7;
console.log(div1);
//exponents are also the same
let pow1 = 2**3;
console.log(pow1)

// rounding - no ints and floats means we need rounding to get to integer values
// Math.round('value' => rounds to the nearest integer)
// Math.floor(<value>) -> rounds down
// Math.ceo;(<value>) --> rounds up
let roundedPi = Math.round(3.1415);
console.log(roundedPi);
let roundPiup = Math.ceil(3.1415);
console.log(roundPiup);

let value_to_round = 3.141592;
console.log(value_to_round.toFixed(2), typeof value_to_round.toFixed(2));
console.log(Math.round(value_to_round*100)/100);


console.log('\n\nDatatype Interaction Mindbenders')
// Mind bender - javascript interactions of variables of different datatypes
let test1 = 4.14 + '4';
console.log(test1, typeof test1);

let test2 = '4' + false;
console.log(test2, typeof test2);

let test3 = 4 + true; // the number 5?????
console.log(test3, typeof test3);

let test4 = 4 + false; // the number 5?????
console.log(test4, typeof test4);

let test5 = [] + undefined; // the string undefined??
console.log(test5, typeof test5);

let test6 = [] + false; // the string false??
console.log(test6, typeof test6);

let test7 = [] + 4; // the string 4????
console.log(test7, typeof test7);

// What the hell is happening here???
// JavaScript is doing some conversion shenanigans at compile time to avoid errors at runtime
// JavaScript will pretty much do whatever it can to avoid an error
// which means we must be much more careful/intentional about our operations and datatypes than we are in python
// in python, if we do something wrong, we get an error
// in javascript, if we do something wrong, we get 4 + true = 5
// or undefined + [] is like true or something? there's a lot of weird ones out there
// https://www.youtube.com/watch?v=et8xNAc2ic8 
//---------------------------------------------------------------------------------------------------------------

//------------------------------------------------PM-----------------------------------------------------------
console.log('\n\nFunctions:')
/* 
JavaScript Functions
-mostly the same purpose and structure as python functions 
    = give a name to a process that accepts some input and gives some output
    - can use that name with whatever input to perform  that process
*/

// regular named func with func keyword
// input parentheses just like python, curly brackets controlling code block instead of indentation and colon
function helloWorld(){
    return 'Hello, Foxes!'
}
// calling that function:- either save call as a variable with 'let' and then   put inside a console.log() call
let returned_value = helloWorld()
console.log(returned_value)

// named function using a variable name
let helloName = function(n){
    return 'Hello, ' + n +'!'
}

let returned_value2 = helloName('Devon');// note: not providing proper input for your function may not produce an error in JS
console.log(returned_value2);


// Sam's preferred syntax for writing functions in jS
// ES6 Arrow Function
// let <functionName> = (<input>) => { <code> }
// taking the same helloName function and rewriting as an ES6 arrow function:
let helloNameArrow = (n) => {
    return 'Hello, ' + n + '!!!'
}

let returned_value3 = helloNameArrow('Johnny');
console.log(returned_value3)

// when using no parameters with an arrow function:
let helloWorld5 = () => {
        return 'Hello Foxes'
}

// when using more than one parameter with an arrow function, the () before  the arrow are necessary
// when using one and only one parameter with an arrow function , the () becomes optional (see above)


// what is a self-invoking function?
// a function that calls itself when it is derived
(function(n){return 'Hello' + n + '!'})('Joel')
// no name, cant be called later, occurs on that one single line

console.log('\n\nConditionals/Control Flow: ')
// JS conditionals and the way we use them are the same conceptually as python conditionals
// the concepts of if statements, elif statements, and else statement are all the same
// only diff is the syntax

/*
if (condition){
    code to run
} else if (condition) {
    code to run
} else {
    code to run
}*/

let age=37
if (age < 18) {
    console.log('Child')
} else if (age < 65) {
    console.log('Adult')
} else {
    console.log('Senior')
}

// most operators (<,>, <=, >=, in) are the same
// some operators are different
    // combining conditionals:
            // python 'and' becomes && in JS
            //python 'or' becomes || in jS
// let color = 'blue';
// if ('b' in color && 'u' in color){
//     console.log(color);
// } 
let color = 'blue';
if (color == 'blue'){
    if (color != 'green'){
        console.log(color)
    }
}
// the 'in' operator for membership test only works for arrays/objects aka python lists/dictionaries
// == in JS is not the same as == in python !!
// == in python tests for equality of value and type, whereas in JS it only tests for value
// hence '4' the string and 4 the number ahve the same value so == comes back true in JS
console.log('4'==4); // string 4 equals number 4?
// true

// '===' in JS is the same as '==' in Python - checking for equality of value and type
console.log('4' ===4) // false -> equal value not equal type

// JS conditional shorthand
// JS ternary operator is a shorthand way of writing conditional structures
/*
conditional ? code to run: conditinal? code to run : code to run

would be shorthand using ternary operator for the following :
if (conditional1){
    code to run1
} else if (conditional2){
    code to run2
} else {
    code to run3
}
*/

// let age2=37
// if (age2 < 18) {
//     console.log('Child')
// } else if (age2 < 65) {
//     console.log('Adult')
// } else {
//     console.log('Senior')
// }
let age2 = 37;
age2 <18 ? console.log('Child') : age2<65 ? console.log('Adult') : console.log('Senior')


//null in JS is the same as none in Python
// null value and undefined value are not the same
let nonequiv = null;
let undefinedvar;
console.log(nonequiv)
console.log(undefinedvar)
console.log(nonequiv === undefinedvar)

// 38 min mark
// looping in JS
console.log('\n\nLoops')

// not as straightforward  as it is in Python
// closest thing to a loop in JS is the loop through indexes in Python
// normal loop through in JS is to loop through integers in an array or a string
// most common loop type: for loop through indeces of an array or string
// for loop syntax:
// for (<pointer variable>; <end condition>; <step>){code to run at each step}
// many people view this syntax as most similar to a pyhton while loop - this notion that we have some pointer

let mystring = 'Fennec Fox'
// loop through the letters in mystring
// mystring.length is the equivalent to python's len(mystring)
// i++ is same as python's i=i+1
for (let i = 0; i<mystring.length; i++){
    console.log(mystring[i]); // indexing into our string just like python
}

// a loop through number 1 to 10 backwards aka 10,9,8,7,
for (let i = 10; i>0; i--){
    console.log(i);
}

// while loop 
// looping based on a condition
// when that condition is true, run another step of the loop
// when that condition is false, end the loop
console.log('\n\nWhile Loop:')
let n=1;
while (n<11){ //flipping this sign here and changing n increment to n-- will accidentally give you an infinite loop
    console.log(n);
    n++;
};

//56 min mark
// nesting loops
let teststring = 'abc';
for (let i=0; i<teststring.length; i++){
    for (let j=0; j < 3; j++){
        console.log(teststring[i], j);
    }
};

// the do while loop
// an alt to while loop
// will always run at least once regardless of its condition
// normal while loop - can do zero steps
while (false){
    console.log('no steps taken');
}
// essentially all a do while loop is doing is changing the location of the condition to determine if loop runs
// traditional while loop: check condition then run code
// do while loop: run code -> check condition

do {
    console.log('at least one step taken');
} while (false)


console.log('\n\nArrays:');
/* 
JavaScript Arrays are the equivalent of Python's lists
Arrays are ordered, indexed, and can contain any values/datatypes
We can have an array of strings, an array of numbers, and array of other arrays
or any combination of data in our array
Accessing the values at an array index is much the same as a python list
*/
// declaring + defining an array
let animals = ['Fennec Fox', 'Honey Badger', 'Echidna', 'Siberian Tiger'];
// accessing the value at the 0th index:
console.log(animals[0]);
// redefining a value at an index:
animals[1] = 'Giant Panda';
console.log(animals[1]);

// method 1 for looping through an array:
// using indexes
for (let i = 0; i<animals.length; i++){
    console.log(i, animals[i]);
}

// method 2: while loop same thing
let indexpointer = 0;
while (indexpointer < animals.length){
    console.log(indexpointer, animals[indexpointer]);
    indexpointer++};


function replaceEvens(arr){
    for (let i = 0; i < arr1.length; i++) {
        if (i/2===0) {
            arr[i] = "even index";
            }
        }
    return arr
}
let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let answer2 = replaceEvens(arr1)
console.log(answer2)