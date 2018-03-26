// CONSOLE
console.log('hello world!');
console.log('');


// STRINGS
console.log('Strings -');
console.log('I don\'t want a smoothie!!');
console.log(':P' + ':0');
console.log(':P' + ':0');

console.log('');


// NUMBERS
console.log('Numbers -');
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3); //returns the remainder of division

console.log('');


// STRINGS & Numbers
console.log('Strings & Numbers -');

console.log('8 * 8');
console.log('8 * 8' + 8);
console.log('I am ' + (8 * 8) + 'yrs old');
console.log('8 * 8:', 8 * 8);


// BOOLEANS
console.log('Booleans -');
console.log(true, false);
console.log('3 < 4:', 3 < 4);
console.log('3 > 4:', 3 > 4);
console.log('2 <= 2:', 2 <= 2);
console.log('2 > 1 && 2 < 12:', 2 > 1 && 2 < 12); // 'AND' operator
console.log('5 > 12 || 6 <= 18:', 5 > 12 || 6 <= 18); // 'OR' operator

console.log('');

// THREE BASIC TYPES
console.log('Basic Types -');

console.log(typeof 'hello', typeof (8 - 7), typeof (2 > 1));

console.log('');

// VARIABLES
console.log('Variables -');

var five = 5; //cannot be a number or start with a number OR have a character other than an underscore (_)
console.log('five:', five); // cannot use a variable before it is defined
var ten = 10;
console.log('five + ten:', (five + ten));
console.log('five * ten:', (five * ten));

console.log('');


// ALTERING Variables
console.log('Altering Variables -');
var myStudentDebt = 1700; //no spaces in variables, use Camel Case
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt -= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt += 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt++; // + 1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt--; // - 1
console.log('myStudentDebt:', myStudentDebt);

console.log('');

// ARRAYS
console.log('Arrays -');

var myLuckyNumbers = [3, 7, 'eight', (12 + 2), 21]; // [val, val, etc]; --> is the syntax for storing values in an array
console.log('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers[1]);


console.log('');


// OBJECTS
console.log('Objects -'); //syntax of objects has { } --> braces brackets
// objects allow you to create key value indexes
//var object = {
//  key: value,
//  key: value
// };
var me = {
  name: 'Rachel',
  age: 19,
  nativeNewYorker: false
};
console.log('me:', me);
console.log("me['name']:", me['name']);
console.log('me.name', me.name);

console.log('');

// FUNCTIONS
console.log('Functions -');

var sayHi = function() {
  console.log('hi!');

};

console.log('sayHi():');
sayHi();


var saySomeMessage = function(cheese) {
  console.log(cheese);
}

console.log('saySomeMessage(\'hello\'):');
saySomeMessage('hello');
saySomeMessage('goodbye');

var addNumbers = function(num1, num2) {
  return num1 + num2 // return --> when you run the funtion, it will give you that value
}

console.log(addNumbers(8, 12));


//function squared (number) {
  //  return number * number
//}

var squared = function (number) {
    return number * number
}

var describeMe = function (me) {
    return 'My name is ' + me.name + '! I am ' + me.age + ' yrs old. If you asked me if I am a native New Yorker, my response would be: ' + me.nativeNewYorker + '.'
};


console.log('');

//CONDITIONAL STATEMENTS
console.log('Conditional Statements -');

if (me.age > 21) {
    console.log('party time');
} else if (me.age < 5) {
    console.log('why are you here');
} else {
    console.log('not quite yet');
}


console.log('');


// LOOP
console.log('Loops -');
var hamburgers = 0;

for (var i = 0; hamburgers < 10; i++) {
    console.log(hamburgers + ' hamburger(s)')
    hamburgers++;
}

for (var i = 0; i <= 6; i = i + 2) {
    console.log(i);
}

console.log('how many licks does it take to get to the center of a tootsie pop?');

for (var licks = 1; licks <= 4; licks++) {
    if (licks == 4) {
        console.log('CRUNCH!!!');
    } else {
      console.log(licks);
    }
}
