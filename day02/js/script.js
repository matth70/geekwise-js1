// alert("I hope you are having a nice day.");
// var firstName = prompt("Enter your name.");
// console.log(firstName);

// alert("I hope you are having a nice day.");
// var userAge = parseInt(prompt("Enter your age."));
// console.log(userAge + 10);

//  String Obj
var myString = "This is a string.";
var myStringObj = new String("This is also a string");
console.log(myStringObj);

// Num Obj
var numObj = 7;
var numObj  = new Number(7.6);
console.log(numObj);

//  Float
var float = "5.9876543"
console.log(float);

// Boolean Obj
var bool = true;
console.log(bool);

// Array Obj
var array = ['red', 'orange', 'purple'];
var numArr = [0, 1, 2, 3];
// console.log(array);
// console.log(numArr[1] + numArr[2]);

// Obj Obj
var myCar = {
  make: "Jeep",
  model: "Wrangler",
  year: "2014"
};

// Math Obj
var num1 = 5.6;
// console.log( Math.round(num1));
// console.log( Math.floor(num1));
// console.log( Math.ceil(num1));
var rand = Math.random();
rand = rand*10;
rand = Math.floor(rand);
console.log(Math.round( (Math.random() *10) ));

// Date Obj
var theDate = new Date();
console.log(theDate.getDate());
// getDay() === day of the week - 0
// getDate() === day of the month
// getMonth() === month - 0
// getFullYear() === year

// if( theDate.getDay() === 0 ){
//   console.log('sunday');
// }else if ( theDate.getDay() === 1 ){
//   console.log('monday');
// }else if ( theDate.getDay() === 2 ){
//   console.log('tuesday');
// }else if ( theDate.getDay() === 3 ){
//   console.log('wednesday');
// }else if ( theDate.getDay() === 4 ){
//   console.log('thursday');
// }
var userMon = parseInt(prompt('month')) - 1;
var userDay = parseInt(prompt('day'));
var userYear = parseInt(prompt('year'));

var userBday = new Date(userYear, userMon, userDay);

var m = userBday.toLocaleString('us-en', {month: 'short'});
var d = userBday.toLocaleString('us-en', {day: '2-digit'});
var y = userBday.toLocaleString('us-en', {year: 'numeric'});

console.log( m + '.' + ' ' + d + ', ' + y );
// var myBday = new Date (1998, 8, 02);
// var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
// console.log(myBday);
/* options:
  weekday, year, month, day, hour, etc...
  narrow, short, long, numeric, 2-digit
*/
// var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
// var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
// var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});
//
// console.log(myBmon + '' + myBdate + ', ' + myByear); //'August 20, 1998'

// prompt user for 3 individual items: birth month, day, and year
// save each response as a var
// parse each response into a number
// for 0 based items, subtract 1 (day/month)
// create a new Date instance representing user's birthday()
// var myBday = new Date(1998, 8, 20);
// var someVariableName = new Date(var, var, var);
// take users birthday object and parse to console in the following format:
// October 02, 98
