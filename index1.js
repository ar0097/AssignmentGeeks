// Random number from 0 to 100
let x = Math.floor(Math.random()*(100-0)+0);
console.log("Random number from 0 to 100: "+x);

// Random number from 50 to 100
let y = Math.floor(Math.random()*(100-50)+50);
console.log("Random number from 50 to 100: "+y);

// Generate a random number of 3 digits
let z = Math.floor(Math.random()*(999-100+1) + 100);
console.log("random number of 3 digits: "+z);

// What is the year today
let date =  new Date().getFullYear();
console.log("The year of today is: "+date);

//What is the month today as a number?
let month = new Date().getMonth() + 1;
console.log("month of today is", month);

//What is the date today?
let today = new Date().toLocaleDateString()
console.log("The date is:  "+today)

//What is the day today as a number?
const d = new Date().getDay();
console.log("the day today is : " + d); 

//What is the hours now?
const h = new Date().getHours();
console.log("the hour is : " + h); 

//What is the minutes now?
const m = new Date().getMinutes();
console.log("the minutes is : " + m); 

// 	Find out the numbers of seconds elapsed from January 1, 1970 to now.
var d1 = new Date(1970, 1, 01, 01, 00, 00, 00);
var sec = Math.floor( d1 / 1000 );;
console.log("the numbers of seconds elapsed from January 1, 1970 to now: "+sec);